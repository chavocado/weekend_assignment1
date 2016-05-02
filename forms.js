$(document).ready(function() {
    var array = [];
    var totalSalaries = 0;

    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      var values = {};
      $.each($('#employeeinfo').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });

      console.log(values);
      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

      array.push(values);
      // appends to DOM
      totalSalaries += Number.parseInt(values.yearlysalary / 12);

      appendDom(values);

      //function that adds salary

        //totalSalaries += Number.parseInt(values.yearlysalary / 12);

        //$el.append('<p> Total Monthly Salary Costs:'  + totalSalaries + '<p>');

        console.log(totalSalaries);



      //check array
            console.log(array);
    });

    function appendDom(empInfo) {
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();
      $el.append('<p>' + empInfo.employeefirstname + " " + empInfo.employeelastname + " " + empInfo.employeenumber + " " + empInfo.jobtitle + " " + empInfo.yearlysalary + '</p><p> Total Cost of Salaries $' + totalSalaries + '<p>');

    }










});
