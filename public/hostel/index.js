/**
 * Created by bhavyaagg on 01/04/18.
 */

$(function() {

    $.get('/api/hostel/viewAll', function(response) {
        if (response.success) {
            let hostels = response.data;

            let hostelsList = $('#hostelsList');

            for (let i = 0; i < hostels.length; i++) {

                hostelsList.append(`<li class="list-group-item">
        <div class="row text-center">
        <div class="col-2">${hostels[i].Hostel_Name}</div>
        <div class="col-2">${hostels[i].No_of_Rooms}</div>
        <div class="col-2">${hostels[i].No_of_floors}</div>
        <div class="col-2">${hostels[i].Location}</div>
        <div class="col-2">${hostels[i].Elevator}</div>

        </div>
        </li>`)
            }
        }
    })

    // $('#addHostelBtn').click(() => {
    //   $('#listHostels').empty()
    //   $('#addHostelDiv').css("display", "block");
    // })

    $('#submitHostelBtn').click(function() {

        $.post('/api/hostel/add', {
                Hostel_Name: $('#Hostel_Name').val(),
                No_of_Rooms: $('#No_of_Rooms').val(),
                No_of_floors: $('#No_of_floors').val(),
                Location: $('#Location').val(),
                Elevator: $('#Elevator').val()
            },
            function(response) {
                if (response.success) {
                    $('#addHostelModal').modal('hide');
                    window.location.reload();
                } else {
                    console.log("Could not add the hostel right now")
                }
            })

    })



});