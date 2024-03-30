 const tableData = document.querySelectorAll('.tabdata');
            const paragraphs = document.querySelectorAll('#means div');

            tableData.forEach((element) => {
              element.addEventListener('click', function() {
                const paragraphNumber = this.getAttribute('data-paragraph');

                paragraphs.forEach((p) => {
                  p.classList.add('hiddenmess');
                });

                const selectedParagraph = document.getElementById('paragraph' + paragraphNumber);
                selectedParagraph.classList.remove('hiddenmess');

                void selectedParagraph.offsetWidth;

                selectedParagraph.style.opacity = '1';

                tableData.forEach(td => {
                  td.classList.remove('selected');
                });

                this.classList.add('selected');
              });
            });
