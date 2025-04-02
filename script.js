function updateTime() {
    const now = new Date();
    const timeRange = document.getElementById('timeRange').value;
    const hoursToAdd = parseInt(timeRange);
    const newDate = new Date(now.getTime() + hoursToAdd * 3600000);

    const optionsDateWithYear = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    const optionsDate = { weekday: 'short', day: 'numeric', month: 'short' };
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };

    const formattedDateWithYear = newDate.toLocaleDateString('en-GB', optionsDateWithYear).replace(/(\d{2}) (\w{3}) (\d{4})/, '$1 $2, $3');
    const formattedTime = newDate.toLocaleTimeString('en-US', optionsTime).replace('am', 'AM').replace('pm', 'PM');

    document.getElementById('currentDateTime').innerHTML = `<b style="font-size: 14px;">${formattedDateWithYear}</b><br><b style="font-size: 14px;">${formattedTime} IST</b>`;

    const newJerseyDate = new Date(newDate.getTime()).toLocaleDateString('en-GB', optionsDate).replace(',', '');
    const newJerseyTime = new Date(newDate.getTime()).toLocaleTimeString('en-US', { timeZone: 'America/New_York', ...optionsTime }).replace('am', 'AM').replace('pm', 'PM');
    const londonDate = new Date(newDate.getTime()).toLocaleDateString('en-GB', optionsDate).replace(',', '');
    const londonTime = new Date(newDate.getTime()).toLocaleTimeString('en-GB', { timeZone: 'Europe/London', ...optionsTime }).replace('am', 'AM').replace('pm', 'PM');
    const dubaiDate = new Date(newDate.getTime()).toLocaleDateString('en-GB', optionsDate).replace(',', '');
    const dubaiTime = new Date(newDate.getTime()).toLocaleTimeString('en-AE', { timeZone: 'Asia/Dubai', ...optionsTime }).replace('am', 'AM').replace('pm', 'PM');
    const indiaDate = new Date(newDate.getTime()).toLocaleDateString('en-GB', optionsDate).replace(',', '');
    const indiaTime = new Date(newDate.getTime()).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', ...optionsTime }).replace('am', 'AM').replace('pm', 'PM');
    const japanDate = new Date(newDate.getTime()).toLocaleDateString('en-GB', optionsDate).replace(',', '');
    const japanTime = new Date(newDate.getTime()).toLocaleTimeString('en-JP', { timeZone: 'Asia/Tokyo', ...optionsTime }).replace('am', 'AM').replace('pm', 'PM');
    const sydneyDate = new Date(newDate.getTime()).toLocaleDateString('en-GB', optionsDate).replace(',', '');
    const sydneyTime = new Date(newDate.getTime()).toLocaleTimeString('en-AU', { timeZone: 'Australia/Sydney', ...optionsTime }).replace('am', 'AM').replace('pm', 'PM');

    document.getElementById('newJerseyDate').innerText = newJerseyDate;
    document.getElementById('newJerseyTime').innerText = newJerseyTime;
    document.getElementById('londonDate').innerText = londonDate;
    document.getElementById('londonTime').innerText = londonTime;
    document.getElementById('dubaiDate').innerText = dubaiDate;
    document.getElementById('dubaiTime').innerText = dubaiTime;
    document.getElementById('indiaDate').innerText = indiaDate;
    document.getElementById('indiaTime').innerText = indiaTime;
    document.getElementById('japanDate').innerText = japanDate;
    document.getElementById('japanTime').innerText = japanTime;
    document.getElementById('sydneyDate').innerText = sydneyDate;
    document.getElementById('sydneyTime').innerText = sydneyTime;

    const timeDisplay = document.getElementById('timeDisplay');
    const nowLabel = document.getElementById('nowLabel');
    if (hoursToAdd === 0) {
        timeDisplay.innerText = 'Displaying current time';
        nowLabel.style.visibility = 'visible'; // Show "Now" label
    } else {
        timeDisplay.innerText = `Displaying +${hoursToAdd} hour${hoursToAdd > 1 ? 's' : ''} from now`;
        nowLabel.style.visibility = 'hidden'; // Hide "Now" label
    }

    // Update slider background
    const slider = document.getElementById('timeRange');
    slider.style.background = `linear-gradient(to right, rgb(26, 100, 180) ${slider.value / slider.max * 100}%, gray ${slider.value / slider.max * 100}%)`;
}

document.getElementById('timeRange').addEventListener('input', updateTime);
setInterval(updateTime, 1000);
updateTime();