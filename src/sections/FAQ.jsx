import FAQItem from "../components/FAQItem.jsx";
import styles from "./FAQ.module.css";

const ITEMS = [
  {
    q: "Is Mira free?",
    a: "Yes, Mira is free to start. Open the app inside Telegram and you can begin chatting right away – no card, no setup.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. Mira runs entirely inside Telegram. If you already have Telegram, you already have everything you need.",
  },
  {
    q: "Does it work in group chats?",
    a: "Yes. Add Mira to any group. She follows the thread, answers when mentioned, and helps without taking over the conversation.",
  },
  {
    q: "What can Mira actually do?",
    a: "Draft and rewrite messages, summarize long threads, plan your day, generate images, answer questions, and act on simple requests inside chat.",
  },
  {
    q: "Is my data private?",
    a: "Mira only reads messages you send to her or threads where she is invited. Your other chats are never seen.",
  },
  {
    q: "Which languages does Mira support?",
    a: "Mira understands and replies in the major languages – including English, Russian, Spanish, German, French, Portuguese and more.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 className={styles.title}>Questions, answered</h2>
          <p className={styles.subhead}>Everything worth knowing before you open Mira.</p>
        </header>

        <div className={styles.list}>
          {ITEMS.map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
