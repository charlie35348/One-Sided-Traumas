function back()
{
    window.location.href="page-2.html";
}
function displayAnswer(event) {
    event.preventDefault(); // Prevent form from submitting normally

    let answer = document.getElementById("answer"); // Div to show the answer
    let selectedOption = document.querySelector('input[name="trauma"]:checked'); // Get selected radio button

    if (selectedOption) {
        if (selectedOption.id === "1") {
            answer.innerHTML = "In friendships, betrayal can be a painful wake-up call that not everything is as it seems. The truth is, what we see with our eyes is not always the full picture, and intentions can be hidden behind smiles and words. In todays world, finding a genuinely trustworthy friend can be challenging. Often, people are drawn to us when we are thriving when we have success, money, or influence. But when life takes a downturn, these so-called friends can vanish, revealing who truly stands by us.<br><br>Its essential to prepare ourselves for these realities, knowing that no one is a guaranteed permanent fixture in our lives. Friendships, like all relationships, ebb and flow. The best approach is to cherish meaningful connections but also to remain self-reliant and resilient in the face of disappointment. Instead of focusing on who stays or goes, we can focus on building self-respect, fostering inner strength, and seeking friendships based on shared values. By setting boundaries and managing expectations, we can find peace, knowing that true friends bring light to our lives even in our darkest moments.";
        } else if (selectedOption.id === "2") {
            answer.innerHTML = "Losing a friend, whether through life changes or even death, is a difficult part of our life journey. Life is filled with different connections some people come and go, while others may remain for only a season. Some friends leave us permanently, passing on from this world, while others may drift away, pursuing their own paths and dreams. This is a natural part of lifes ebb and flow, and accepting it can help us find peace.<br><br>While the pain of losing someone close is real and often deep, focusing on ourselves and our own growth can bring healing. Instead of holding on to what was, we can learn to embrace the new possibilities that await. Moving on doesnot mean forgetting; rather, its about acknowledging the impact that friend had on our life and carrying forward the lessons we shared. Facing this reality with courage lets us honor our memories while focusing on our own journey, building resilience, and opening ourselves to new relationships and experiences that enrich our lives.";
        } else if (selectedOption.id === "3") {
            answer.innerHTML = "Miscommunication is a frequent source of tension in friendships, often causing misunderstandings that can escalate if not addressed. Small misinterpretations may lead to hurt feelings or frustration, creating unnecessary rifts. Instead of reacting or jumping to conclusions, it is helpful to take a step back and seek clarity before letting assumptions take over. Addressing the misunderstanding directly can prevent it from becoming a deeper conflict.<br><br>Rather than letting miscommunication turn into a source of lasting pain, make an effort to communicate openly and clarify what was intended or misunderstood. This approach not only resolves issues faster but also strengthens trust and mutual understanding. Choosing patience and empathy allows friendships to grow stronger, turning potential conflicts into opportunities for learning and building a more resilient connection.";






    
        }
    } else {
        answer.innerHTML = "Please select an option to get specific advice.";
    }
}
