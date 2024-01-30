// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `<a href="https://en.wikipedia.org/wiki/Know_thyself" target="_blank">γνῶθι σεαυτόν</a>`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `<p><img src="/ahahah.gif" alt="ahahah.gif"></p>`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ________  _______   ________  ________ ________  _______       ___    ___ 
  |\\   ____\\|\\  ___ \\ |\\   __  \\|\\  _____\\\\   __  \\|\\  ___ \\     |\\  \\  /  /|
  \\ \\  \\___|\\ \\   __/|\\ \\  \\|\\  \\ \\  \\__/\\ \\  \\|\\  \\ \\   __/|    \\ \\  \\/  / /
   \\ \\  \\  __\\ \\  \\_|/_\\ \\  \\\\\\  \\ \\   __\\\\ \\   _  _\\ \\  \\_|/__   \\ \\    / / 
    \\ \\  \\|\\  \\ \\  \\_|\\ \\ \\  \\\\\\  \\ \\  \\_| \\ \\  \\\\  \\\\ \\  \\_|\\ \\   \\/  /  /  
     \\ \\_______\\ \\_______\\ \\_______\\ \\__\\   \\ \\__\\\\ _\\\\ \\_______\\__/  / /    
      \\|_______|\\|_______|\\|_______|\\|__|    \\|__|\\|__|\\|_______|\\___/ /     
                                                                \\|___|/      
                                                                             
                                                                             
   ________ ___       ________  ________  _______   ________                 
  |\\  _____\\\\  \\     |\\   __  \\|\\   __  \\|\\  ___ \\ |\\   ____\\                
  \\ \\  \\__/\\ \\  \\    \\ \\  \\|\\  \\ \\  \\|\\  \\ \\   __/|\\ \\  \\___|_               
   \\ \\   __\\\\ \\  \\    \\ \\  \\\\\\  \\ \\   _  _\\ \\  \\_|/_\\ \\_____  \\              
    \\ \\  \\_| \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\\\  \\\\ \\  \\_|\\ \\|____|\\  \\             
     \\ \\__\\   \\ \\_______\\ \\_______\\ \\__\\\\ _\\\\ \\_______\\____\\_\\  \\            
      \\|__|    \\|_______|\\|_______|\\|__|\\|__|\\|_______|\\_________\\           
                                                      \\|_________|           

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for my Github page.
`;
};
