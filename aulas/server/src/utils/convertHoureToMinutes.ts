export default function convertHoureToMinutes(time:string){
    const [houre, minutes] = time.split(':').map(Number);
    const timeInMinutes = (houre*60) + minutes;

    return timeInMinutes;
};