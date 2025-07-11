// Fashion Style Quiz
// This program asks the user ten questions about fashion preferences
// and determines their style profile based on their answers.

const readline = require('readline');

// Create the interface for user input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize scores for each style
let styles = {
    "Classic Chic": 0,
    "Boho": 0,
    "Power Professional": 0,
    "Trendy Minimalist": 0,
    "Romantic Vintage": 0,
    "Edgy Streetwear": 0
};

// Define the questions and answer mappings
const questions = [
    {
        text: "1. When you get dressed, which of these matters most?\n1) Feeling powerful and ready to succeed\n2) Feeling creative and open to possibility\n3) Feeling calm, balanced, and clear-minded\n4) Feeling nostalgic or connected to tradition\n5) Feeling confident and put-together\n6) Feeling free to break rules and stand out\nYour choice: ",
        mapping: {
            1: "Power Professional",
            2: "Boho",
            3: "Trendy Minimalist",
            4: "Romantic Vintage",
            5: "Classic Chic",
            6: "Edgy Streetwear"
        }
    },
    {
        text: "2. How do your hobbies shape your style?\n1) Inspire practical pieces (sportswear, durable fabrics)\n2) Pull me toward artisan, handmade, or vintage items\n3) Influence the brands or logos I display\n4) Inspire me to experiment with color and silhouette\n5) They don't shape my style much\n6) Inspire me to collect nostalgic pieces\nYour choice: ",
        mapping: {
            1: "Power Professional",
            2: "Boho",
            3: "Edgy Streetwear",
            4: "Trendy Minimalist",
            5: "Classic Chic",
            6: "Romantic Vintage"
        }
    },
    {
        text: "3. Think of the last time you dressed in a way that felt deeply you. What were you doing?\n1) Presenting or leading\n2) Exploring or creating\n3) Relaxing and simplifying\n4) Celebrating tradition\n5) Protesting or performing\n6) Dining out or networking\nYour choice: ",
        mapping: {
            1: "Power Professional",
            2: "Boho",
            3: "Trendy Minimalist",
            4: "Romantic Vintage",
            5: "Edgy Streetwear",
            6: "Classic Chic"
        }
    },
    {
        text: "4. Which of these statements feels closest to your beliefs about clothes?\n1) Clothing helps me perform at my best\n2) Clothing expresses who I am inside\n3) Clothing reflects my mindset\n4) Clothing bridges heritage and modern life\n5) Clothing is joyful rebellion\n6) Clothing is an investment in timeless quality\nYour choice: ",
        mapping: {
            1: "Power Professional",
            2: "Boho",
            3: "Trendy Minimalist",
            4: "Romantic Vintage",
            5: "Edgy Streetwear",
            6: "Classic Chic"
        }
    },
    {
        text: "5. When you imagine your ideal closet, how does it look?\n1) A capsule of high-quality neutrals\n2) A colorful, eclectic collection\n3) Structured professional outfits\n4) Romantic vintage finds\n5) Oversized pieces and sneakers\n6) Polished ensembles\nYour choice: ",
        mapping: {
            1: "Trendy Minimalist",
            2: "Boho",
            3: "Power Professional",
            4: "Romantic Vintage",
            5: "Edgy Streetwear",
            6: "Classic Chic"
        }
    },
    {
        text: "6. How do you want your clothes to affect your mindset?\n1) Energize and uplift me\n2) Ground and center me\n3) Give me confidence and focus\n4) Spark creativity and curiosity\n5) Feel sensual and self-assured\n6) Remind me of my roots and values\nYour choice: ",
        mapping: {
            1: "Power Professional",
            2: "Trendy Minimalist",
            3: "Classic Chic",
            4: "Boho",
            5: "Edgy Streetwear",
            6: "Romantic Vintage"
        }
    },
    {
        text: "7. Which scenario makes you feel most at ease?\n1) Walking into a boardroom in a sharp suit\n2) Arriving at a music festival in flowy layers\n3) Visiting a gallery in minimal monochrome\n4) Browsing antiques in a vintage dress\n5) Hanging out in an oversized hoodie\n6) Attending a dinner in a polished look\nYour choice: ",
        mapping: {
            1: "Power Professional",
            2: "Boho",
            3: "Trendy Minimalist",
            4: "Romantic Vintage",
            5: "Edgy Streetwear",
            6: "Classic Chic"
        }
    },
    {
        text: "8. What role does social perception play in your style?\n1) I dress mainly for myself\n2) I balance self-expression with fitting in\n3) I dress to project authority\n4) I dress to connect with a community\n5) I want to signal success and refinement\n6) I prefer thoughtful, intentional clothes\nYour choice: ",
        mapping: {
            1: "Edgy Streetwear",
            2: "Boho",
            3: "Power Professional",
            4: "Romantic Vintage",
            5: "Classic Chic",
            6: "Trendy Minimalist"
        }
    },
    {
        text: "9. What fabrics, colors, or details feel most like you?\n1) Soft fabrics and earthy tones\n2) Crisp cotton and neutrals\n3) Structured wools and bold colors\n4) Lace and delicate textures\n5) Technical fabrics and bold graphics\n6) Natural fibers in monochrome\nYour choice: ",
        mapping: {
            1: "Boho",
            2: "Classic Chic",
            3: "Power Professional",
            4: "Romantic Vintage",
            5: "Edgy Streetwear",
            6: "Trendy Minimalist"
        }
    },
    {
        text: "10. If your wardrobe told a story, which theme would it have?\n1) Timeless Elegance\n2) Wanderlust and Creativity\n3) Ambition and Mastery\n4) Calm, Conscious Living\n5) Romantic Nostalgia\n6) Unapologetic Rebellion\nYour choice: ",
        mapping: {
            1: "Classic Chic",
            2: "Boho",
            3: "Power Professional",
            4: "Trendy Minimalist",
            5: "Romantic Vintage",
            6: "Edgy Streetwear"
        }
    }
];

// Track which question we're on
let currentQuestion = 0;

// Greet the user
console.log("Welcome to the Fashion Style Quiz!\n");

// Function to ask each question
const askQuestion = () => {
    if (currentQuestion < questions.length) {
        rl.question(questions[currentQuestion].text, (answer) => {
            const style = questions[currentQuestion].mapping[answer.trim()];
            if (style) {
                styles[style]++;
            } else {
                console.log("Invalid choice, no points awarded.");
            }
            currentQuestion++;
            askQuestion();
        });
    } else {
        rl.close();
        showResult();
    }
};

// Function to show the final result
const showResult = () => {
    let topStyle = null;
    let topScore = -1;
    for (let style in styles) {
        if (styles[style] > topScore) {
            topScore = styles[style];
            topStyle = style;
        }
    }
    console.log("\nYour style profile is:", topStyle);
};

// Start the quiz
askQuestion();