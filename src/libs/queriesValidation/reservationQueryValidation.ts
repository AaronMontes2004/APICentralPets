export const verifyIdReservation: string = "SELECT * FROM reservacion WHERE idReservacion = ?"

export const verifyDate = (value: any): boolean => {

    /* console.log(new Date(value).getFullYear(), new Date().getUTCFullYear(),new Date(value).getFullYear() > new Date().getUTCFullYear()); */

    if (new Date(value).getFullYear() < new Date().getUTCFullYear()) return false
    
    if (new Date(value).getFullYear() > new Date().getUTCFullYear()) return true
    
    if (new Date(value).getUTCMonth()+1 < new Date().getUTCMonth()+1) return false

    if (new Date(value).getUTCMonth()+1 <= new Date().getUTCMonth()+1){
        if (new Date(value).getUTCDate() < new Date().getUTCDate()) return false;
    }

    return true;
}