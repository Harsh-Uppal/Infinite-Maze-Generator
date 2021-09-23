var database, downloads;

window.onload = async () => {
    database = await LoadDatabase();
    await database.ref("Downloads").on('value', (data) => { downloads = data.val() });
}

function MainBtnClicked() {
    /*for nodejs server only
    let sendData = document.getElementById('sendData');
    sendData.value = new Date();
    document.getElementById('MainForm').submit();*/

    //for firebase
    let dateTime = new Date();

    downloads.push(dateTime);
    database.ref('/').update({ lastDownload: dateTime, Downloads: downloads });
}