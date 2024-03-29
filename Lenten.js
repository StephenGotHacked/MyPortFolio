const tableData = document.querySelectorAll('.tabdata');
const paragraphs = document.querySelectorAll('#means div');

  tableData.forEach((element) => {
    element.addEventListener('click', function() {
      const paragraphNumber = this.getAttribute('data-paragraph');
      
      // Hide all paragraphs
      paragraphs.forEach((p) => {
        p.classList.add('hiddenmess');
      });
      
      // Show the selected paragraph
      document.getElementById('paragraph' + paragraphNumber).classList.remove('hiddenmess');

      tableData.forEach(td => {
        td.classList.remove('selected');
      });
      
      // Add the 'selected' class to the clicked table data element
      this.classList.add('selected');
    });
  });
