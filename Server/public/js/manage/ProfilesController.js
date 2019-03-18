function ProfilesController (){
    this.ProfilesMain=function(){
          $('#Profiles-table').DataTable();
          $('#update-Profiles').on(ace.click_event, function(){
          					$.gritter.add({
          						// (string | mandatory) the heading of the notification
          						title: 'Thông báo',
          						// (string | mandatory) the text inside the notification
          						text: 'Cập nhập thành công',
                      class_name :'gritter-success'
          					//	class_name: 'gritter-success' + (!$('#gritter-light').get(0).checked ? ' gritter-light' : '')
          					});
          					return false;
          });
    }

}
