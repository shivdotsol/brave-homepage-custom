import Shortcut from "./components/Shortcut";
import Todo from "./components/Todo";

function App() {
    const shortcuts = [
        {
            name: "YouTube",
            url: "https://www.youtube.com",
            img: "youtube.png",
        },
        {
            name: "WhatsApp",
            url: "https://web.whatsapp.com",
            img: "whatsapp.png",
        },
        {
            name: "Mail",
            url: "https://mail.google.com/mail/u/1/#inbox",
            img: "gmail.png",
        },
        {
            name: "Internshala",
            url: "https://internshala.com/",
            img: "internshala.png",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/feed/",
            img: "linkedin.png",
        },
        {
            name: "X",
            url: "https://x.com",
            img: "x.png",
        },
        {
            name: "AWS",
            url: "https://ap-south-1.console.aws.amazon.com/console/home?region=ap-south-1",
            img: "aws.png",
        },
        {
            name: "Chess",
            url: "https://www.chess.com/play/online/new",
            img: "chess.png",
        },
        {
            name: "Grok",
            url: "https://grok.com",
            img: "grok.png",
        },
        {
            name: "ChatGPT",
            url: "https://chatgpt.com",
            img: "chatgpt.png",
        },
        {
            name: "Perplexity",
            url: "https://www.perplexity.ai",
            img: "perplexity.png",
        },
        {
            name: "Leetcode",
            url: "https://leetcode.com/problemset/",
            img: "leetcode.png",
        },
    ];
    return (
        <div className="h-screen flex justify-between px-12 py-14 bg-gradient-to-tr from-zinc-800 to-neutral-950 text-neutral-100">
            <div className="h-[230px] grid grid-cols-6 mt-2">
                {shortcuts.map((i) => (
                    <Shortcut name={i.name} url={i.url} img={i.img} />
                ))}
            </div>
            <div>
                <Todo />
            </div>
        </div>
    );
}

export default App;
