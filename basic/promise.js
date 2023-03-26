const hasMeeting = false;

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

// Multi level promise
// const addToCalendar = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calendar);
//     });
// };

const addToCalendar = (meetingDetails) => {
    const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
};

meeting
    .then(addToCalendar)
    .then((res) => {
        //If the promise is resolved
        console.log(res);
    })
    .catch((err) => {
        //If the promise is rejected
        console.log(err.message);
    });

    // To check asynchronous nature of promises
    console.log("Hello there!");