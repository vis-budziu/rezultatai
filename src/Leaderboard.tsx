import data from './data.json';

interface Participant {
  name: string;
  scores: number[];
}

interface LeaderboardData {
  title: string;
  tasks: string[];
  participants: Participant[];
}

export default function Leaderboard() {
  const { title, tasks, participants } = data as LeaderboardData;

  const calculateTotal = (scores: number[]) => {
    return scores.reduce((sum, score) => sum + score, 0);
  };

  const sortedParticipants = [...participants].sort(
    (a, b) => calculateTotal(b.scores) - calculateTotal(a.scores)
  );

  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a0033 0%, #330066 50%, #1a0033 100%)' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');

        tr:hover {
          background: rgba(255, 0, 255, 0.05);
        }
      `}</style>

      <div className="w-full max-w-4xl">
        <div className="mb-4 sm:mb-8 text-center">
          <h1 className="font-['Rajdhani'] text-3xl sm:text-5xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #ff00ff, #00ffff)' }}>
            {title}
          </h1>
        </div>

        <div className="rounded-lg overflow-x-auto" style={{
          background: 'rgba(10, 0, 20, 0.8)',
          border: '1px solid rgba(255, 0, 255, 0.3)',
          boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)'
        }}>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 0, 255, 0.2)' }}>
                <th className="font-['Rajdhani'] text-left p-2 sm:p-4 text-xs sm:text-sm font-semibold tracking-wide" style={{ color: '#ff66ff' }}>
                  VIETA
                </th>
                <th className="font-['Rajdhani'] text-left p-2 sm:p-4 text-xs sm:text-sm font-semibold tracking-wide" style={{ color: '#ff66ff' }}>
                  ŽVALGAS
                </th>
                {tasks.map((task, index) => (
                  <th key={index} className="font-['Rajdhani'] text-center p-2 sm:p-4 text-xs sm:text-sm font-semibold tracking-wide" style={{ color: '#66ffff' }}>
                    {task}
                  </th>
                ))}
                <th className="font-['Rajdhani'] text-center p-2 sm:p-4 text-xs sm:text-sm font-semibold tracking-wide" style={{ color: '#cc99ff' }}>
                  VISO
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedParticipants.map((participant, index) => (
                <tr
                  key={participant.name}
                  className="transition-colors duration-200"
                  style={{ borderBottom: '1px solid rgba(255, 0, 255, 0.1)' }}
                >
                  <td className="p-2 sm:p-4">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded font-['Rajdhani'] font-bold text-black text-sm sm:text-lg" style={{
                      background: 'linear-gradient(135deg, #ff00ff, #00ffff)'
                    }}>
                      {index + 1}
                    </div>
                  </td>
                  <td className="p-2 sm:p-4">
                    <span className="font-['Rajdhani'] text-sm sm:text-lg font-medium" style={{ color: '#ff99ff' }}>
                      {participant.name}
                    </span>
                  </td>
                  {participant.scores.map((score, scoreIndex) => (
                    <td key={scoreIndex} className="p-2 sm:p-4 text-center">
                      <span className="font-['Rajdhani'] text-sm sm:text-lg" style={{ color: '#99ffff' }}>
                        {score}
                      </span>
                    </td>
                  ))}
                  <td className="p-2 sm:p-4 text-center">
                    <span className="font-['Rajdhani'] text-base sm:text-xl font-bold" style={{ color: '#cc99ff' }}>
                      {calculateTotal(participant.scores)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
