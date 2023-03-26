const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM',
        };
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already scheduled'));
    }
});

meeting
    .then((res) => {
        //If the promise is resolved
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        //If the promise is rejected
        console.log(err.message);
    });
