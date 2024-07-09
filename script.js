$('#submit').on( 'click', function() {
  
    var projectName = $('#entry_1301656810').val(),
        projectNumber = $('#entry_1841012025').val(),
        projectBudget = $('#entry_596091773').val(),
        websiteBudget = $('#entry_116171440').val(),
        timeline = $('entry_449884252').val(),
        examples = $('entry_1560255698').val(),
        upcomingMeetings = $('entry_558989414').val(),
        currentWebsite = $('entry_200255908').val(),
        cms = $('group_1565269258_1').val(),
        blog = $('group_1565269258_2').val(),
        map = $('group_1565269258_3').val(),
        contactForm = $('group_1565269258_4').val(),
        survey = $('group_1565269258_5').val(),
        newsletter = $('group_1565269258_6').val(),
        other = $('group_1565269258_7').val(),
        otherResponse = $('entry_1565269258_other_option_response').val(),
        additionalInfo = $('entry_2020065069').val(),
        additionalQuestions = $('entry_459540751').val();
        
        
  
    $.ajax({ 
      url : "https://docs.google.com/a/altaplanning.com/forms/d/169m4zy0TTUSyOQBpT6Q0Gez8AUhi5aLkYHz5CHQyPcQ/formResponse",
      data: { 
        "entry_1301656810": projectName, 
        "entry_1841012025": projectNumber, 
        "entry_596091773": projectBudget, 
        "entry_116171440": websiteBudget,
        "entry_449884252" : timeline,
        "entry_1560255698" : examples,
        "entry_558989414" : upcomingMeetings,
        "entry_200255908" : currentWebsite,
        "group_1565269258_1" : cms,
        "group_1565269258_2" : blog,
        "group_1565269258_3" : map,
        "group_1565269258_4" : contactForm,
        "group_1565269258_5" : survey,
        "group_1565269258_6" : newsletter,
        "group_1565269258_7" : other,
        "entry_1565269258_other_option_response" : otherResponse,
        "entry_2020065069" : additionalInfo,
        "entry_459540751" : additionalQuestions,
      },
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          alert('success');
        },
        200: function () {
          alert('fail');
        }
      }
      })
  });