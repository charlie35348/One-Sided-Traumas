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
            answer.innerHTML = "Breakups are often complex and can stem from misunderstandings or moments where couples are unaware of the issues that may arise. Many relationships end due to various reasons, some of which could have been resolved with open communication and understanding. Sometimes, a relationship may break due to the influence of others. For instance, certain friends might interfere out of jealousy or a desire for attention, consciously or unconsciously attempting to separate a couple. This type of interference, often from a close friend, can cause unexpected damage. In particular, there can be cases where a girls best friend feels envious of her relationship, leading to subtle actions or suggestions that plant seeds of doubt or insecurity. These negative influences can make it harder for couples to trust each other, leading to unnecessary conflicts.<br><br>When facing challenges, it is essential to pause and carefully consider the situation instead of making drastic decisions immediately. First, try to identify the root causes of the issues. If the problem involves a serious betrayal of trust, such as cheating or ongoing dishonesty, a breakup might be the healthiest option to protect oneself. However, if the issues are due to misunderstandings or outside influence, it is worth discussing and resolving them with ones partner. In many cases, with patience and sincere communication, couples can overcome obstacles and strengthen their relationship.";
        } else if (selectedOption.id === "2") {
            answer.innerHTML = "Unrequited love can be a deeply painful experience, often leading to feelings of disappointment, sadness, and even a lasting impact on ones lifestyle. Many people hold back from confessing their feelings out of fear of rejection, preferring to admire their crush from a distance rather than risk the heartbreak that may follow. This silent admiration, however, can gradually become a source of emotional pain, as one struggles with the desire for love that may never be returned. I can relate to this pain, having experienced unrequited love myself. Nowadays, there is a perception that some people, especially certain girls, are more drawn to wealth or a flashy lifestyle rather than genuine affection. This can be particularly discouraging for middle-class individuals who feel their sincerity might go unappreciated or overlooked.<br><br>Despite these challenges, it is crucial to remember that love rooted in material attraction often lacks depth and sincerity. True love, on the other hand, is patient and does not depend on wealth or appearance. Rather than forcing a connection, it is wiser to wait for someone who values you for who you are. The journey may be difficult, and it may take time, but when you meet the right person, it will be worth the wait. By understanding and accepting our reality, we can navigate through the pain of unrequited love and hold out hope for a more meaningful relationship that aligns with our values and intentions.";
        } else if (selectedOption.id === "3") {
            answer.innerHTML = "Cheating is one of the most painful betrayals in any relationship, and it is often a clear signal that the relationship has reached its end. When someone chooses to be unfaithful, they are breaking the trust that forms the foundation of any true connection. Rather than trying to convince a cheater to change or pleading for explanations, it is often best to walk away. Once a person has made the choice to cheat, it becomes difficult, if not impossible to rebuild the same level of trust and respect. In this situation, letting go is not a sign of weakness, but of strength and self-respect.<br><br>Choosing to leave a cheating partner allows you to prioritize yourself, rather than becoming entangled in a relationship that lacks sincerity. Being with someone who values honesty and commitment is far better than staying in a fake relationship filled with deceit. Accepting the reality of betrayal can be difficult, but it is also freeing. Once you release yourself from the pain of betrayal, you open the door to finding someone who genuinely deserves your love. Life is too precious to waste on someone who doesnot appreciate you; embrace your independence, rediscover your own happiness, and move forward with a renewed sense of self-worth.";





    
        }
    } else {
        answer.innerHTML = "Please select an option to get specific advice.";
    }
}
