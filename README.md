# OpenAI API FalseStart - Build a College Finder Web Application

This is an example applications that makes naive use of the openAI chat APIs to create a college finder web application.. It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/). Check out the tutorial or follow the instructions below to get set up.

## Commentary

The emergence of foundational models into the mainstream public presents a unique challenge for software engineers tasked with building web applications. On Tik Tok, Reels and Youttube, there are thousands of tutorials suggesting the 'end is here' for classical web application development methodologies with LLMs being a tectonic shift in the modus operandi. 

The openAI tutorials don't make fighting this uphill battle of setting practical expectations easy; the tutorial this demo is taken from suggests buiding a new application can be as easy as cobbling together a prompt and doing, well, *something* with the output. Like anything else, the simple nature of the tutorial masks the complexity and risks introduced by naive use of the openAI APIs. 

### Risks
- Without input and output validation, applications are vulnerable to prompt injections, that is, a malicious (or just naive) user could insert a prompt that would cause bad things to happen
- Without attempts to throttle API traffic, every application is vulnerable to DDOS attacks
- The results returned by the API might be misleading to the point of being a liability, for example, try entering a 2.5 GPA with a 28 ACT score in the north east; you may be surprised to find Yale in the list of returned results. 

### Challenges
- Even with temperature equals 1.0, the Json output is dependent on prompts; therefore, any parsing of the output is impractical. The only solution is to inject the format of the expected Json in the prompt itself which at that point, just give me a database
- Any developer approaching this task without understanding LLMs is likely to be surprised and challenged to debug the results they get. For example, try entering 'west' as the region ... the output starts with 'coast' and then proceeds to list some colleges. Why? How would you handled this case. Invariably, you'd end up forcing the user to select from catagegorial inputs which would defeat the whole purpose of chat interfaces. 


## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-college-finder
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app, check out the [tutorial](https://platform.openai.com/docs/quickstart).
