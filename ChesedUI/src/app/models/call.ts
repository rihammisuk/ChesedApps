   export interface Call {
    callId: number;
    patientId: number | null;
    patientName: string;
    timeofTrip: string | null;
    males: number | null;
    females: number | null;
    address: string;
    location: string;
    toLoc: boolean | null;
    callback: string;
    memberId: number | null;
    memberName: string;
    status: number | null;
    called: boolean | null;
    notes: string;
    requests: number | null;
    twoWay: boolean | null;
    callStamp: string | null;
    userId: number | null;
    rmales: number | null;
    rfemales: number | null;
    carSeat: boolean | null;
    ts: number;
    driverNotes: string;
    overrideLocation: string;
    coverdBy: number | null;
    lastModBy: number | null;
    onlyAnyway: boolean | null;
    lastChangedStatus: string | null;
    origTimeOfTrip: string | null;
    callBackHome: string;
    callBackReturn: string;
    tripGroup: number | null;
    gasMileage: number | null;
    priority: boolean | null;
    preTripNote: string;
    changeHistory: string;
    rowguid: string | null;
    inactivePatient: boolean | null;
    addressId: number | null;
    gas: number | null;
    toll: number | null;
    children: number | null;
    rchildren: number | null;
    address2Id: number | null;
    address2: string;
    serviceId: number | null;
}