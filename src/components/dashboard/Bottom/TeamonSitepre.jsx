import { useSelector } from "react-redux";

const TeamonSitepre = ({ teamData }) => {
  const teamList = teamData.team;
  console.log(teamData);
  const filteredTeamData =
    teamList.length > 0 ? [...teamList].reverse().slice(0, 4) : [];
  console.table(filteredTeamData);
  return (
    <div className="dashboardBottomCards h-full border border-black/20 rounded-lg p-4 flex flex-col gap-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Team On Site</h1>
        <button className="text-sm text-[#ff4800]">View All</button>
      </div>

      <div className="flex flex-col gap-3">
        {filteredTeamData.length > 0 ? (
          filteredTeamData.map((items, idx) => {
            return (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="rounded-full w-10 h-10 overflow-hidden">
                    <img src={items.url} alt={items.tmName} />
                  </div>
                  <div>
                    <h1 className="font-bold text-sm">{items.tmName}</h1>
                    <p className="text-[12px] text-black/60">{items.tmRole}</p>
                  </div>
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${items.isPresent ? "bg-[green]" : "bg-[red]"}`}
                ></div>
              </div>
            );
          })
        ) : (
          <h1 className="text-black/30 text-sm">No Team Members / Projects</h1>
        )}
      </div>
    </div>
  );
};
export default TeamonSitepre;
