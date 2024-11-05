var text = document.getElementById('text');
var completedCount = 0;

function change() {
    console.log("Button Clicked");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
            let output = '<table class="table"><thead><tr><th>Title</th><th>Status</th></tr></thead><tbody>';
            for (let i = 0; i < data.length; i++) {
                let checked = data[i].completed ? 'checked' : '';
                
                output += `<tr>
                            <td>${data[i].title}</td>
                            <td>
                                <!-- Dynamically update checkbox state based on completed status -->
                                <input type="checkbox" ${checked} 
                                       ${checked ? 'disabled' : ''} 
                                       onclick="updateCompleted(${data[i].id}, this)">
                            </td>
                        </tr>`;
            }
            
            output += '</tbody></table>';
            text.innerHTML = output;
        }
    };
}
function updateCompleted(id, checkbox) {
    if (checkbox.checked) {
        completedCount++;
    } else {
        completedCount--;
    }
    if (completedCount === 5) {
        alert("Congratulations, you completed 5 tasks!");
    }
}


