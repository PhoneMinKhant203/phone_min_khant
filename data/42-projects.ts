export type FortyTwoProject = {
  slug: string;
  name: string;
  summary: string;
  what: string;
  learning: string[];
  concepts: string[];
  githubUrl?: string;
};

export const fortyTwoProjects: FortyTwoProject[] = [
  {
    slug: "libft",
    name: "Libft",
    summary: "A foundational C library built by reimplementing common utility functions.",
    what: "Recreated a reusable set of standard-style C functions and supporting data structures.",
    learning: ["Writing reusable C interfaces", "Memory ownership", "Testing edge cases"],
    concepts: ["C", "Pointers", "Strings", "Memory allocation", "Linked lists"],
    githubUrl: "https://github.com/PhoneMinKhant203/42_Libft",
  },
  {
    slug: "ft-printf",
    name: "ft_printf",
    summary: "A C implementation of formatted output with a small format-string parser.",
    what: "Built a printf-style function that handles format specifiers and variadic arguments.",
    learning: ["Breaking a parser into clear steps", "Handling variadic arguments", "Matching expected output"],
    concepts: ["C", "Variadic functions", "Parsing", "Format specifiers"],
    githubUrl: "https://github.com/PhoneMinKhant203/ft_printf",
  },
  {
    slug: "get-next-line",
    name: "get_next_line",
    summary: "A line-by-line reader for file descriptors, designed around buffered input.",
    what: "Implemented a function that returns one line at a time while retaining unread data between calls.",
    learning: ["Managing persistent state", "Working with buffers", "Handling file descriptors and edge cases"],
    concepts: ["C", "File descriptors", "Static storage", "Buffering", "Memory management"],
    githubUrl: "https://github.com/PhoneMinKhant203/getnextline",
  },
  {
    slug: "pipex",
    name: "pipex",
    summary: "A small systems project that recreates the behavior of a shell pipeline.",
    what: "Connected commands and files through processes and pipes to model shell redirection and execution.",
    learning: ["Following process lifecycles", "Managing file descriptors", "Reasoning about errors and cleanup"],
    concepts: ["C", "Processes", "Pipes", "execve", "File descriptors"],
    githubUrl: "https://github.com/PhoneMinKhant203/pipex",
  },
  {
    slug: "philosophers",
    name: "philosophers",
    summary: "A concurrency project exploring shared resources, timing, and coordination between threads.",
    what: "Built a simulation around concurrent philosophers competing for shared forks while following timing rules.",
    learning: ["Coordinating concurrent work", "Handling shared state safely", "Reasoning about timing and deadlocks"],
    concepts: ["C", "Threads", "Mutexes", "Concurrency", "Synchronization"],
    githubUrl: "https://github.com/PhoneMinKhant203/philo",
  },
  {
    slug: "minishell",
    name: "minishell",
    summary: "A small command-line shell project focused on parsing commands and managing execution.",
    what: "Implemented a shell-style command interface as a systems programming exercise.",
    learning: ["Breaking command handling into stages", "Managing processes and file descriptors", "Handling input and errors"],
    concepts: ["C", "Command parsing", "Processes", "Signals", "File descriptors"],
    githubUrl: "https://github.com/PhoneMinKhant203/MINISHELL",
  },
  {
    slug: "cub3d",
    name: "Cub3D",
    summary: "A 3D-style maze project built around rendering a world from a two-dimensional map.",
    what: "Created a first-person maze experience as a graphics and systems programming project.",
    learning: ["Translating map data into a rendered view", "Working with graphics and input", "Structuring a real-time program"],
    concepts: ["C", "Ray casting", "2D maps", "Graphics", "Input handling"],
    githubUrl: "https://github.com/PhoneMinKhant203/CUBE-3D",
  },
];

export const getFortyTwoProject = (slug: string) => fortyTwoProjects.find((project) => project.slug === slug);
