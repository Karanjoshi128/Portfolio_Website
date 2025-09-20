import { useState, useEffect, useRef } from "react";
import { MessageSquare, X } from "lucide-react";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage(
                "Hi! I'm Karan's portfolio assistant. Ask me anything about Karan's skills, projects, education, experience, or how to get in touch. How can I help you today?"
            );
        }
    }, [isOpen, messages.length]);

    const addBotMessage = (text) => {
        const message = {
            id: Date.now().toString(),
            text,
            isBot: true,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, message]);
    };

    const addUserMessage = (text) => {
        const message = {
            id: Date.now().toString(),
            text,
            isBot: false,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, message]);
    };

    const getBotResponse = (userInput) => {
        const input = userInput.toLowerCase();

        // Simple rule-based responses
        if (input.includes("bio") || input.includes("about")) {
            return `Here's the bio for Karan Joshi:\n\nName: Karan Joshi\nRoles: Full Stack Developer, Programmer\n\nDescription:\nI am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.\n\nLinks:\nGitHub: https://github.com/Karanjoshi128\nResume: https://ljsz9ukogn.ufs.sh/f/KX1pzsIV6K2s3aHkZ09btZpIVN1mXwCxQGPKcO2i9zynAk0e\nLinkedIn: https://www.linkedin.com/in/karan-joshi-a70740271/\nTwitter: https://twitter.com/KaranJoshi128\nInstagram: https://www.instagram.com/nasty0970/\n`;
        }

        if (input.includes("skills") || input.includes("technologies") || input.includes("tech stack")) {
            return `Here are Karan Joshi's skills:\n\nFrontend:\n- React Js\n- Redux\n- Next Js\n- Typescript\n- HTML\n- CSS\n- JavaScript\n- Bootstrap\n- ShadCn\n\nBackend:\n- Node Js\n- Express Js\n- Graph Ql\n- Python\n- Flask\n- Django\n- MySQL\n- Postgresql\n- MongoDB\n- Firebase\n\nOthers:\n- Git\n- GitHub\n- Vercel\n- VS Code\n- Postman\n- Figma\n`;
        }

        if (input.includes("education") || input.includes("degree") || input.includes("college") || input.includes("school")) {
            return `Karan Joshi's education details:\n\n1. ABES Institute of Technology, Ghaziabad\n   - Period: Oct 2022 - Oct 2026\n   - Degree: Bachelor of Technology - BTech, Computer Science and Engineering\n   - Grade: 7.7 CGPA\n   - Description: I am currently pursuing a Bachelor's degree in Computer Science and Engineering at ABES Institute of Technology, Ghaziabad. I have completed 5 semesters and have a CGPA of 7.7. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club, where I am learning and working on exciting projects with a team of talented developers.\n\n2. Uttarakhand Public School, Noida Sector-56\n   - Period: Aug 2020 - Aug 2022\n   - Degree: ISC(XII), Science with Computer\n   - Grade: 91.6%\n   - Description: I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.\n\n3. Uttarakhand Public School, Noida Sector-56\n   - Period: Aug 2018 - Aug 2020\n   - Degree: CBSE(X), Science with Computer\n   - Grade: 92.3%\n   - Description: I completed my class 10 education at Uttarakhand public School, Noida Sector-56, where I studied Science with Computer Application.\n`;
        }

        if (input.includes("experience") || input.includes("work") || input.includes("internship") || input.includes("job")) {
            return `Karan Joshi's experience:\n\n1. Web Development Intern – Prompt Professional Services (Jun 2025 - July 2025)\n   • Built the official website for a chartered accountancy firm, showcasing professional services such as accounting, bookkeeping, GST, and ITR filing.\n   • Developed the site using the MERN stack, making all key service offerings digitally accessible to clients through modern navigation, interactive content, and a secure admin dashboard.\n\n2. Freelance Work – E-commerce Store Development (Odoo Platform) (Apr 2024 - May 2024)\n   • Developed a fully functional e-commerce website using Odoo.\n   • Implemented key features including product listings, shopping cart, payment integration, and order tracking.\n   • Customized the admin dashboard for inventory, users, and order management.\n\n3. Full Stack Developer Intern at ArgoChat (2024)\n   • Worked on real-time chat features, authentication, and UI improvements.\n\n4. Web Developer at Saaransh AI (2023)\n   • Built AI-powered PDF summarization platform using MERN stack and transformer models.\n\n5. Open Source Contributor\n   • Contributed to several open source projects in React and Node.js.\n`;
        }

        if (input.includes("projects") || input.includes("project")) {
            return `Karan Joshi's projects:\n\n1. Saaransh AI\n   - Description: AI-powered PDF summarization web app.\n   - GitHub: https://github.com/Karanjoshi128/saaransh\n   - Webapp: https://saaransh-git-master-karan-joshis-projects.vercel.app/\n2. Hisaab\n   - Description: Node.js backend for user and transaction management.\n   - GitHub: https://github.com/Karanjoshi128/Hisaab-Frontend\n   - Webapp: https://hisaab-frontend.vercel.app/\n3. Agro Chat\n   - Description: AI chatbot for farmers.\n   - GitHub: https://github.com/Karanjoshi128/Agro_Chat\n   - Webapp: https://agro-chat.vercel.app/\n4. Lynkie\n   - Description: Social media link manager.\n   - GitHub: https://github.com/Karanjoshi128/LYNKIE\n   - Webapp: https://lynkie.vercel.app/\n`;
        }

        if (input.includes("contact") || input.includes("email") || input.includes("reach") || input.includes("connect")) {
            return `You can contact Karan Joshi via:\n- Email: karanjoshi128@gmail.com\n- LinkedIn: https://www.linkedin.com/in/karan-joshi-a70740271/\n- Twitter: https://twitter.com/KaranJoshi128\n- Instagram: https://www.instagram.com/nasty0970/\n`;
        }

        if (input.includes("award") || input.includes("achievement") || input.includes("honor") || input.includes("certificate")) {
            return `Karan Joshi's notable achievements:\n- Winner, Smart India Hackathon 2024 (Team Saaransh)\n- Top 10, National Coding Challenge 2023\n- Google Developers Student Club active member\n- Multiple open source contributions\n`;
        }

        // Default response
        return "I'm Karan's portfolio assistant! You can ask me about Karan's skills, projects, education, experience, achievements, or how to contact him. What would you like to know?";
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        addUserMessage(userMessage);
        setInputValue("");
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const response = getBotResponse(userMessage);
            addBotMessage(response);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Open chat"
                    style={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#fff",
                        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                        border: "1px solid #e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                        cursor: "pointer",
                        transition: "box-shadow 0.2s, background 0.2s",
                    }}
                >
                    <MessageSquare style={{ color: "#2563eb", width: 24, height: 24 }} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 40,
                        right: 24,
                        width: 350,
                        maxWidth: "95vw",
                        height: 500,
                        background: "#fff",
                        borderRadius: 18,
                        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.14)",
                        border: "1px solid #e5e7eb",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 1001,
                        animation: "fadeIn 0.2s",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "16px 18px 12px 18px",
                            borderBottom: "1px solid #f3f4f6",
                            borderTopLeftRadius: 18,
                            borderTopRightRadius: 18,
                            background: "#fff",
                        }}
                    >
                        <span
                            style={{
                                fontWeight: 600,
                                fontSize: 16,
                                color: "#222",
                            }}
                        >
                            Chat Assistant
                        </span>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                            style={{
                                border: "none",
                                background: "none",
                                borderRadius: "50%",
                                padding: 4,
                                cursor: "pointer",
                            }}
                        >
                            <X style={{ color: "#6b7280", width: 20, height: 20 }} />
                        </button>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "16px 14px",
                            background: "#fff",
                        }}
                    >
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                style={{
                                    display: "flex",
                                    justifyContent: message.isBot ? "flex-start" : "flex-end",
                                    marginBottom: 8,
                                }}
                            >
                                <div
                                    style={{
                                        background: message.isBot ? "#f3f4f6" : "#2563eb",
                                        color: message.isBot ? "#222" : "#fff",
                                        borderRadius: 14,
                                        padding: "8px 14px",
                                        fontSize: 14,
                                        maxWidth: "80%",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {message.text.split("\n").map((line, idx) => (
                                        <p key={idx} style={{ margin: 0 }}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <div
                                    style={{
                                        background: "#f3f4f6",
                                        borderRadius: 14,
                                        padding: "8px 14px",
                                        fontSize: 14,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 8,
                                            height: 8,
                                            background: "#a3a3a3",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                            animation: "bounce 1s infinite alternate",
                                        }}
                                    ></span>
                                    <span
                                        style={{
                                            width: 8,
                                            height: 8,
                                            background: "#a3a3a3",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                            animation: "bounce 1s infinite alternate",
                                            animationDelay: "0.1s",
                                        }}
                                    ></span>
                                    <span
                                        style={{
                                            width: 8,
                                            height: 8,
                                            background: "#a3a3a3",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                            animation: "bounce 1s infinite alternate",
                                            animationDelay: "0.2s",
                                        }}
                                    ></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form
                        style={{
                            borderTop: "1px solid #f3f4f6",
                            background: "#fff",
                            padding: "10px 12px",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            borderBottomLeftRadius: 18,
                            borderBottomRightRadius: 18,
                        }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSendMessage();
                        }}
                    >
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your question..."
                            style={{
                                flex: 1,
                                height: 36,
                                borderRadius: 10,
                                border: "1px solid #e5e7eb",
                                background: "#f9fafb",
                                padding: "0 12px",
                                fontSize: 14,
                                outline: "none",
                                transition: "border 0.2s",
                            }}
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isTyping}
                            style={{
                                background: "#2563eb",
                                color: "#fff",
                                border: "none",
                                borderRadius: 10,
                                padding: "0 18px",
                                height: 36,
                                fontWeight: 500,
                                fontSize: 14,
                                cursor: "pointer",
                                opacity: !inputValue.trim() || isTyping ? 0.5 : 1,
                                transition: "opacity 0.2s",
                            }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
            <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @keyframes bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-4px); } }
      `}</style>
        </>
    );
};

export default Chatbot;
