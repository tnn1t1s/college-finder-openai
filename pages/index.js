import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [gpaInput, setGpaInput] = useState("");
  const [actInput, setActInput] = useState("");
  const [regionInput, setRegionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gpa: gpaInput, act: actInput, region: regionInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setGpaInput("");
      setActInput("");
      setRegionInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>College Finder</title>
        <link rel="icon" href="/college.png" />
      </Head>

      <main className={styles.main}>
        <img src="/college.png" className={styles.icon} />
        <h3>Find My College</h3>
        <form onSubmit={onSubmit}>
          <input type="text" name="gpa" placeholder="Enter a GPA" value={gpaInput} onChange={(e) => setGpaInput(e.target.value)} />
          <input type="text" name="act" placeholder="Enter an ACT score" value={actInput} onChange={(e) => setActInput(e.target.value)} />
          <input type="text" name="region" placeholder="Enter a Region" value={regionInput} onChange={(e) => setRegionInput(e.target.value)} />
          <input type="submit" value="Get my Colleges .." />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
