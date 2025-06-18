type RouteResult = {
  TripId: string;
  TripName: string;
  FromStopId: string;
  FromStopName: string;
  ToStopId: string;
  ToStopName: string;
  DepartureTime: string;
  ArrivalTime: string;
  ServiceId?: string;
  DepartureDayOffset?: number;
  ArrivalDayOffset?: number;
  SearchDate?: string;
  TripDuration: string; // NEW FIELD
};

const routeResults: RouteResult[] = [
  {
    TripId: "429993_52_1_20595",
    TripName: "",
    FromStopId: "30600008",
    FromStopName: "Pod stanicou",
    ToStopId: "9300004",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:00:00",
    ArrivalTime: "00:10:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "10 min",
  },
  {
    TripId: "470015_51_1_21295",
    TripName: "",
    FromStopId: "30600005",
    FromStopName: "Pod stanicou",
    ToStopId: "9300006",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:01:00",
    ArrivalTime: "00:13:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "12 min",
  },
  {
    TripId: "1989_01_5_387",
    TripName: "",
    FromStopId: "30600001",
    FromStopName: "Pod stanicou",
    ToStopId: "9300001",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:02:00",
    ArrivalTime: "00:08:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "6 min",
  },
  {
    TripId: "461010_51_3_21251",
    TripName: "",
    FromStopId: "30600005",
    FromStopName: "Pod stanicou",
    ToStopId: "9300006",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:03:00",
    ArrivalTime: "00:17:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "14 min",
  },
  {
    TripId: "453997_51_1_21125",
    TripName: "",
    FromStopId: "30600005",
    FromStopName: "Pod stanicou",
    ToStopId: "9300006",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:04:00",
    ArrivalTime: "00:19:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "15 min",
  },
  {
    TripId: "433007_51_1_20685",
    TripName: "",
    FromStopId: "30600004",
    FromStopName: "Pod stanicou",
    ToStopId: "9300006",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:05:00",
    ArrivalTime: "00:16:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "11 min",
  },
  {
    TripId: "429111_52_2_20596",
    TripName: "",
    FromStopId: "30600009",
    FromStopName: "Pod stanicou",
    ToStopId: "9300005",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:06:00",
    ArrivalTime: "00:15:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "9 min",
  },
  {
    TripId: "470222_51_2_21296",
    TripName: "",
    FromStopId: "30600006",
    FromStopName: "Pod stanicou",
    ToStopId: "9300007",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:07:00",
    ArrivalTime: "00:14:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "7 min",
  },
  {
    TripId: "1990_01_6_388",
    TripName: "",
    FromStopId: "30600002",
    FromStopName: "Pod stanicou",
    ToStopId: "9300002",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:08:00",
    ArrivalTime: "00:20:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "12 min",
  },
  {
    TripId: "461020_51_4_21252",
    TripName: "",
    FromStopId: "30600007",
    FromStopName: "Pod stanicou",
    ToStopId: "9300008",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:09:00",
    ArrivalTime: "00:23:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "14 min",
  },
  {
    TripId: "453998_51_2_21126",
    TripName: "",
    FromStopId: "30600010",
    FromStopName: "Pod stanicou",
    ToStopId: "9300009",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:10:00",
    ArrivalTime: "00:24:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "14 min",
  },
  {
    TripId: "433008_51_2_20686",
    TripName: "",
    FromStopId: "30600011",
    FromStopName: "Pod stanicou",
    ToStopId: "9300010",
    ToStopName: "Hlavná stanica",
    DepartureTime: "00:11:00",
    ArrivalTime: "00:27:00",
    ServiceId: "",
    DepartureDayOffset: 0,
    ArrivalDayOffset: 0,
    SearchDate: "2025-06-18",
    TripDuration: "16 min",
  },
];

function Routes() {
  return (
    <div className="bg-foreground w-160  rounded-md flex flex-col border-border border-1 ">
      <div className=" bg-inputs text-4xl text-white overflow-hidden font-bold flex w-full py-3 px-6 justify-between items-center rounded-t-md">
        <span>From Stop</span>
        <span>To Stop</span>
      </div>
      <div className="w-full py-1 px-3 overflow-scroll max-h-84">
        {routeResults.map((route, idx) => (
          <div
            key={idx + route.ArrivalTime + route.TripId}
            className=" h-8 text-white w-full"
          >
            <div>
              <span>
                {route.TripName != "" ? route.TripName : route.ToStopName}
              </span>
              <span>{route.DepartureTime}</span>
              <span>{route.TripDuration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Routes;
