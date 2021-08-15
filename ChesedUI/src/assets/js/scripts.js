var gridOptions;

// customize select
function customSelectDropdown() {
  const select = document.querySelectorAll('.selectBtn');
  const option = document.querySelectorAll('.option');
  let index = 1;

  select.forEach(a => {
      a.addEventListener('click', b => {
          const next = b.target.nextElementSibling;
          next.classList.toggle('toggle');
          next.style.zIndex = index++;
      })
  })
  option.forEach(a => {
      a.addEventListener('click', b => {
          b.target.parentElement.classList.remove('toggle');
          
          const parent = b.target.closest('.select').children[0];
          parent.setAttribute('data-type', b.target.getAttribute('data-type'));
          parent.innerHTML = b.target.innerHTML;
      })
  })
}


// draggable select sort
function draggableSort() {
  var el = document.getElementById("sortable");
  new Sortable(el, {
      handle:'.handle',
      animation: 200
  })
}

// textarea charecter count 
var text_max = 200;
$('#count_message').html(text_max + ' charecters');

$('#text').keyup(function() {
  var text_length = $('#text').val().length;
  var text_remaining = text_max - text_length;
  
  if (text_remaining < 2) {
    $('#count_message').html(text_remaining + ' charecter');
  } else {
    $('#count_message').html(text_remaining + ' charecters');
  }
  
});

// chesed file upload 
function chesedFileUpload() {
  var input = document.getElementById( 'file-upload' );
  var infoArea = document.getElementById( 'file-upload-filename' );

  input.addEventListener( 'change', showFileName );

  function showFileName( event ) {
    
    // the change event gives us the input it occurred in 
    var input = event.srcElement;
    
    // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
    var fileName = input.files[0].name;
    
    // use fileName however fits your app best, i.e. add it into a div
    infoArea.textContent = 'File name: ' + fileName;
  }
}

// members ag-grid table
function members_ag_Grid() {
  // specify the columns
  var columnDefs = [
    { headerName: "Last 30", field: "last30" },
    { headerName: "Last 60", field: "last60" },
    { headerName: "Last 90", field: "last90" },
    { headerName: "Last 365", field: "last365" },
    { headerName: "YTD", field: "ytd" },
    { headerName: "Category Name", field: "categoryName" },
    { headerName: "Unit Number", field: "unitNumber" },
    { headerName: "First Name", field: "firstName" },
    { headerName: "Last Name", field: "lastName" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Car", field: "car" },
    { headerName: "Seats", field: "seats" },
    { headerName: "SMS", field: "sms" },
    { headerName: "Detail SMS", field: "detailSms" },
    { headerName: "Email", field: "email" }
  ];

  // specify the data
  // var rowData = [
  //   { 
  //     last30: 2, 
  //     last60: 5, 
  //     last90: 35000, 
  //     last365: 225, 
  //     ytd: 82, 
  //     categoryName: "Active member", 
  //     unitNumber: 15 
  //   },
  //   { 
  //     last30: 2, 
  //     last60: 12, 
  //     last90: 32000, 
  //     last365: 625, 
  //     ytd: 62, 
  //     categoryName: "Active member", 
  //     unitNumber: 95815 
  //   },
  //   { 
  //     last30: 3, 
  //     last60: 9, 
  //     last90: 72000, 
  //     last365: 125, 
  //     ytd: 29, 
  //     categoryName: "Dispatcher",
  //     unitNumber: 15 
  //   },
  // ];

  // let the grid know which columns and what data to use
  this.gridOptions = {
    columnDefs: columnDefs,
    headerHeight: 30,
    defaultColDef: {
      width: 120,
      resizable: true
    },
  };

  // lookup the container we want the Grid to use
  const eGridDiv = document.querySelector('#myMembersGrid');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);

  // fetch the row data to use and one ready provide it to the Grid via the Grid API
  agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/MahfuzShuvo/chesedApi/main/members.json'})
      .then(data => {
        // console.log(data)
          gridOptions.api.setRowData(data);
      });

}


// patients ag-grid table
function patients_ag_Grid() {
  // specify the columns
  var columnDefs = [
    { headerName: "LT", field: "lt" },
    { headerName: "Only Anyway", field: "onlyAnyway" },
    { headerName: "Last Name", field: "lastName" },
    { headerName: "First Name", field: "firstName" },
    { headerName: "Location", field: "location" },
    { headerName: "Home Phone", field: "homePhone" },
    { headerName: "Override Location", field: "overrideLocation" },
    { headerName: "Contact", field: "contact" },
    { headerName: "Contact Phone", field: "contactPhone" },
    { headerName: "Last 30", field: "last30" },
    { headerName: "Active", field: "active", checkboxSelection: true },
    { headerName: "Start Date", field: "startDate" },
    { headerName: "End Date", field: "endDate" },
    { headerName: "Last Mode By", field: "lastModeBy" },
    { headerName: "Last Mode Date", field: "lastModeDate" }
  ];

  // let the grid know which columns and what data to use
  this.gridOptions = {
    columnDefs: columnDefs,
    headerHeight: 30,
    defaultColDef: {
      width: 130,
      resizable: true
    },
  };

  // lookup the container we want the Grid to use
  const eGridDiv = document.querySelector('#myPatientsGrid');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);

  // fetch the row data to use and one ready provide it to the Grid via the Grid API
  agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/MahfuzShuvo/chesedApi/main/patients.json'})
      .then(data => {
        // console.log(data)
          gridOptions.api.setRowData(data);
      });



}


// hospitals ag-grid table
function hospitals_ag_Grid() {
  // specify the columns
  var columnDefs = [
    { headerName: "Hospital Code", field: "hospitalCode" },
    { headerName: "Description", field: "desciption" },
    { headerName: "Address", field: "address" },
    { headerName: "City", field: "city" },
    { headerName: "State", field: "state" },
    { headerName: "ZIP", field: "zip" },
    { headerName: "Area", field: "area" },
    { headerName: "Main Phone", field: "mainPhone" },
    { headerName: "ER Phone", field: "erPhone" },
    { headerName: "Contact Person", field: "contactPerson" }
  ];

  // let the grid know which columns and what data to use
  this.gridOptions = {
    columnDefs: columnDefs,
    headerHeight: 30,
    defaultColDef: {
      // width: 150,
      resizable: true
    },
  };

  // lookup the container we want the Grid to use
  const eGridDiv = document.querySelector('#myHospitalsGrid');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);

  // fetch the row data to use and one ready provide it to the Grid via the Grid API
  agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/MahfuzShuvo/chesedApi/main/hospitals.json'})
      .then(data => {
        // console.log(data)
          gridOptions.api.setRowData(data);
      });

}


// organizations ag-grid table
function organizations_ag_Grid() {
  // specify the columns
  var columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Services", field: "services" },
    { headerName: "Speciality", field: "speciality" },
    { headerName: "Contact", field: "contact" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Email", field: "email" },
    { headerName: "Web", field: "web" },
    { headerName: "Address", field: "address" },
    { headerName: "City", field: "city" }
  ];

  // let the grid know which columns and what data to use
  this.gridOptions = {
    columnDefs: columnDefs,
    headerHeight: 30,
    defaultColDef: {
      // width: 150,
      resizable: true
    },
  };

  // lookup the container we want the Grid to use
  const eGridDiv = document.querySelector('#myOrganizationsGrid');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);

  // fetch the row data to use and one ready provide it to the Grid via the Grid API
  agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/MahfuzShuvo/chesedApi/main/organizations.json'})
      .then(data => {
        // console.log(data)
          gridOptions.api.setRowData(data);
      });

}

// search in ag-grid
function onFilterTextBoxChanged() {
  let el = document.getElementById('filter-text-box').value;
  // console.log(el);
  gridOptions.api.setQuickFilter(el);
}