<?php

namespace App\Http\Controllers\VatManagement;

use App\Http\Controllers\Controller;
use App\Http\Requests\VatManagement\VatChitBillReleaseRequest;
use App\Repositories\VatChitBillReleaseRespository;
use App\Services\Common;
use App\Services\Utils;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Mockery\Exception;
use App\Export\VatChiBillRelease;

class VatChitBillReleaseController extends Controller{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /*
     * 062 index in frmVatChitBillRelease
     * */
    public function index(){

        $comboboxBillKind   = $this->setBillKind();
        $listDataTable      = $this->setLanguage($this->getData());
        $arrayVatChitBillRelease = $this->rowDataLoadFirst($listDataTable);
        return view('vat_management.vat_chit_bill_release',compact(['comboboxBillKind','listDataTable','arrayVatChitBillRelease']));
    }

    private function rowDataLoadFirst($listDataTable){
        $arrayVatChitBillRelease = [];
        foreach ($listDataTable as  $value) {
            $release_ymd = substr($value->RELEASE_YMD,8,2)."/".substr($value->RELEASE_YMD,5,2)."/".substr($value->RELEASE_YMD,0,4);
            $use_ymd = substr($value->USE_YMD,8,2)."/".substr($value->USE_YMD,5,2)."/".substr($value->USE_YMD,0,4);
            $rowdata = new \stdClass;
            $rowdata = $value;
            $rowdata->cellButton = '<button onclick="VatChiBillReleaseController.updateClickLoadData(this)" type="button" class="btn btn-success btn-xs" data-bill_release_count="'. $value->RELEASE_COUNT. '" data-bill_kind_cd="'. $value->BILL_KIND_CD. '" data-bill_release_cd="'.$value->BILL_RELEASE_CD.'"  data-billkind_nm="'.$value->BILLKIND_NM_VIET.'"  data-form_symbol="'.$value->FORM_SYMBOL.'" data-bill_symbol ="'. $value->BILL_SYMBOL .'" data-from_num="'.$value->FROM_NUM.'" data-to_num="'. $value->TO_NUM .'" data-release_ymd="'.$release_ymd.'" data-use_ymd="'.$use_ymd.'" data-state="'.$value->STATE.'" data-toggle="modal" data-target="#update-modal-vat-chit-bill-release" type="button" title="'.Utils::getMessage('btnedit').'"><i class="fa fa-pencil"></i></button> &nbsp <button id="" onclick="VatChiBillReleaseController.setDeleteClick(this,\''.$value->BILL_RELEASE_CD.'\')" data-bill_release_count="'. $value->RELEASE_COUNT .'" data-bill_kind_cd="'. $value->BILL_KIND_CD .'" type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#delete-modal-vat-chit-bill-release" type="button" title="'.Utils::getMessage('btndelete').'"><i class="fa fa-trash-o"></i></button>';
            $arrayVatChitBillRelease[] = $rowdata;
        }
        return $arrayVatChitBillRelease;
    }

    /*
     * 062 setBillKind in function setBillKind C#
     * */
    private function setBillKind(){
        $vatChiBillReleaseRespository = new VatChitBillReleaseRespository();
        $_strQuery = "SELECT BILLKIND_CD AS VALUE, BILLKIND_NM_".Utils::getCurrentCulture()." AS NAME, BILLKIND_SYMBOL FROM bill_kind WHERE (ISDEL IS NULL OR ISDEL != '1') ORDER BY BILLKIND_CD";

        return $vatChiBillReleaseRespository->getBillKind($_strQuery);
    }

    /*
     * 062 getData in frmChitBillRelease
     * */
    private function getData(){
        $result = array();
        try{
            $vatChiBillReleaseRespository = new VatChitBillReleaseRespository();
            $_strQuery = "CALL getChitBillReleaseInfo('')";
            $result = $vatChiBillReleaseRespository->getBillKind($_strQuery);
            $result = $this->setGridData($result);
        }catch (Exception $ex){
            $this->_aMessages = "ERROR!!! VatChitBillReleaseController";
        }
        return $result;

    }

    /*
     * 062 setGridData
     * */
    private function setGridData($dv, $bDataProcess = true){
        if(is_null($dv)){
            return null;
        }

        if($bDataProcess) return $this->setDataProcess($dv);
    }

    /*
     * 062 setDataProcess
     * */
    private function setDataProcess($dv){
        return $dv;
    }

    /*
     * 062 setLanguage
     * */
    private function setLanguage($array){
        foreach ($array as $item){
            $item->BILLKIND_NM_VIET = Common::getLanguage($item,'BILLKIND_NM_');
        }
        return $array;
    }

    /*
     * 062 update Data
     * */
    public function updateData(VatChitBillReleaseRequest $request){
        if($request->isMethod("POST")){
            $result = array();
            try{
                $checkData = $this->checkData($request);
                if($checkData[0]){
                    $releaseDay = explode('/',$request->release_ymd);
                    $useDay = explode('/',$request->use_ymd);

                    $outQuery = "CALL setChitBillReleaseInfo('2',
                    '$request->bill_release_cd',
                    '$request->bill_kind_cd',
                    '$request->bill_release_count',
                    '$request->from_num',
                    '$request->to_num',
                    '$request->form_symbol',
                    '$request->bill_symbol',
                    '$releaseDay[2]$releaseDay[1]$releaseDay[0]',
                    '$useDay[2]$useDay[1]$useDay[0]',
                    '$request->state',
                    ".(int)Utils::getUserSn().",
                    '".Utils::getUserId()."',
                    '');
                    ";
                    if(!empty($outQuery)){
                        $vatChiBillReleaseRespository = new VatChitBillReleaseRespository();
                        $result = $vatChiBillReleaseRespository->getBillKind($outQuery);
                        $this->_sTypeMessage = 'ok';
                        array_push($this->_aMessages, Utils::getMessage('MSG_SUCCESS'));
                    }
                }else{
                    $this->_sTypeMessage = 'error';
                    array_push($this->_aMessages, Utils::getMessage("MsgDontModify"));
                    return $this->loadJson();
                }
            }catch (Exception $ex){
                array_push($this->_aMessages,"ERROR!!!");
            }finally{
                return $this->loadJson($result);
            }

        }else{
            array_push($this->_aMessages, "NOT POST!!!");
        }
        return $this->loadJson();
    }

    /*
     * 062 insert Data
     * */
    public function insertData(VatChitBillReleaseRequest $request){
        if($request->isMethod("POST")){
            $result = array();
            try{
                $checkData = $this->checkData($request);
                if($checkData[0]){
                    $releaseDay = explode('/',$request->release_ymd);
                    $useDay = explode('/',$request->use_ymd);

                    $outQuery = "CALL setChitBillReleaseInfo('1',
                    '$request->bill_release_cd',
                    '$request->bill_kind_cd',
                    '$request->bill_release_count',
                    '$request->from_num',
                    '$request->to_num',
                    '$request->form_symbol',
                    '$request->bill_symbol',
                    '$releaseDay[2]$releaseDay[1]$releaseDay[0]',
                    '$useDay[2]$useDay[1]$useDay[0]',
                    '$request->state',
                    ".(int)Utils::getUserSn().",
                    '".Utils::getUserId()."',
                    '');
                    ";
                    if(!empty($outQuery)){
                        $vatChiBillReleaseRespository = new VatChitBillReleaseRespository();
                        $result = $vatChiBillReleaseRespository->getBillKind($outQuery);
                        $this->_sTypeMessage = 'ok';
                        array_push($this->_aMessages, Utils::getMessage('MSG_SUCCESS'));
                        $value = $vatChiBillReleaseRespository->getBillKind("SELECT * FROM chit_bill_release ,bill_kind WHERE chit_bill_release.BILL_KIND_CD = bill_kind.BILLKIND_CD ORDER BY BILL_RELEASE_CD DESC LIMIT 1;");

                        foreach ($value as $item){
                            // $item->BILLKIND_NM_VIET = Common::getLanguage($item,"BILLKIND_NM_");
                            $item->RELEASE_YMD      = Common::fromYMDtoDMY($item->RELEASE_YMD);
                            $item->USE_YMD      = Common::fromYMDtoDMY($item->USE_YMD);
                        }

                        return $this->loadJson($value);
                    }
                }else{
                    $this->_sTypeMessage = 'error';
                    array_push($this->_aMessages, Utils::getMessage("MsgDontInsert"));
                    return $this->loadJson();
                }
            }catch (Exception $ex){
                array_push($this->_aMessages,"ERROR!!!");
                return $this->loadJson();
            }

        }else{
            array_push($this->_aMessages, "NOT POST!!!");
        }
        return $this->loadJson();
    }

    /*
     * 062 delete Data
     * */
    public function deleteData(VatChitBillReleaseRequest $request){
        if($request->isMethod("POST")){
            $result = array();
            try{
                $outQuery = "CALL setChitBillReleaseInfo('3',
                '$request->bill_release_cd',
                '$request->bill_kind_cd',
                '$request->bill_release_count',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                ".(int)Utils::getUserSn().",
                '".Utils::getUserId()."',
                '');
                ";
                if(!empty($outQuery)){
                    $vatChiBillReleaseRespository = new VatChitBillReleaseRespository();
                    $result = $vatChiBillReleaseRespository->getBillKind($outQuery);
                    $this->_sTypeMessage = 'ok';
                    array_push($this->_aMessages, Utils::getMessage('MSG_SUCCESS'));
                }
            }catch (Exception $ex){
                array_push($this->_aMessages,"ERROR!!!");
                $this->_sTypeMessage = 'error';
                array_push($this->_aMessages, Utils::getMessage("MsgDontDelete"));
                return $this->loadJson();
            }finally{
                return $this->loadJson($result);
            }
        }else{
            array_push($this->_aMessages, "NOT POST!!!");
        }
        return $this->loadJson();
    }

    /*
     * 062 CheckData
     * */
        // if(empty($request->bill_release_cd)) return array(false,'error bill release cd');
    private function checkData($request){
        if(empty($request->form_symbol)) {
            array_push($this->_aMessages,Utils::getMessage("lbl_formofinvoice")." ".Utils::getMessage("FILE_MANAGER_21"));
            return array(false,$this->_aMessages);
        }

        if(empty($request->bill_symbol)) {
            array_push($this->_aMessages,Utils::getMessage("lbl_formofinvoice")." ".Utils::getMessage("MSG_WRONG_INPUT_INFO"));
            return array(false,$this->_aMessages);
        }

        $arrayReleaseDay    = explode('/',$request->release_ymd);
        $arrayUseDay        = explode('/',$request->use_ymd);

        $releaseDay     = Carbon::create($arrayReleaseDay[2], $arrayReleaseDay[1], $arrayReleaseDay[0]);
        $useDay         = Carbon::create($arrayUseDay[2], $arrayUseDay[1], $arrayUseDay[0]);

        if($releaseDay->day > $useDay->addDays(-2)->day) {
            array_push($this->_aMessages,Utils::getMessage("IMENU_MSG21")." ".Utils::getMessage("FILE_MANAGER_19")." ".Utils::getMessage("lblUse_YMD")." 7 ".Utils::getMessage("lblDAY"));
            return array(false,$this->_aMessages);
        }

        if(is_null($request->to_num)||empty($request->to_num)){
            array_push($this->_aMessages,Utils::getMessage("IMENU_MSG16")." ".Utils::getMessage("FILE_MANAGER_21"));
            return array(false,$this->_aMessages);
        }

        if(is_null($request->from_num)||empty($request->from_num)){
            array_push($this->_aMessages,Utils::getMessage("IMENU_MSG16")." ".Utils::getMessage("FILE_MANAGER_21"));
            return array(false,$this->_aMessages);
        }

        if((int) $request->from_num > (int) $request->to_num){
            array_push($this->_aMessages,Utils::getMessage("IMENU_MSG16")." ".Utils::getMessage("FILE_MANAGER_19")." ".Utils::getMessage("IMENU_MSG17"));
            return array(false,$this->_aMessages);
        }

        /*
         * filter ?
         * */
        return array(true,'');
    }
    //////////////////////////Dinh Van Lanh 073 /////////////////
    public function Export_ExCelPHP(Request $Request){

            $code=$Request->LangType;
            $data=$Request->data;
            $excel= new VatChiBillRelease();
            $excel->ExportVatChiBillRelease();


    }

}
