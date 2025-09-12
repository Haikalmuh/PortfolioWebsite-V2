import GitHubCalendar from "react-github-calendar";

const GithubContribution = () => {
  const theme = {
     light: [
      "hsl(0, 0%, 92%)",   // level 0 (kosong)
      "hsl(140, 80%, 85%)", // level 1 (hijau muda)
      "hsl(140, 80%, 70%)", // level 2
      "hsl(140, 80%, 55%)", // level 3
      "hsl(140, 80%, 40%)", // level 4 (hijau paling pekat)
    ],
    dark: [
      "hsl(0, 0%, 18%)",   // level 0 (kosong, background dark)
      "hsl(140, 80%, 35%)", // level 1
      "hsl(140, 80%, 45%)", // level 2
      "hsl(140, 80%, 55%)", // level 3
      "hsl(140, 80%, 65%)", // level 4 (hijau terang)
    ],
  };

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0d0d1a] to-[#1a1a2e] shadow-xl w-full">
      <h2 className="mb-2 text-2xl font-bold text-center text-white">
        My GitHub Contribution
      </h2>
      <p className="mb-6 text-center text-neutral-400">
        Here’s a snapshot of my recent GitHub activities.
      </p>
      <div className="flex justify-center overflow-x-auto">
        <GitHubCalendar
          username="Haikalmuh"  // langsung string
          colorScheme="dark"
          theme={theme}
          blockSize={14}
          blockMargin={4}
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default GithubContribution;
