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
            answer.innerHTML = "Divorce is a life-altering event that can cause significant emotional upheaval within a family. Whether its our own divorce or a close family members, everyone involved feels the impact parents, children, and even extended family members. Divorce often brings feelings of sadness, anger, guilt, and confusion, creating a sense of instability and loss. However, moving forward from this trauma is possible with time, effort, and support.<br><br> To begin the healing process, its essential to acknowledge the pain and accept the reality of the situation. Avoiding or ignoring these emotions only prolongs the distress. Instead, allow yourself to grieve the end of the relationship while gradually shifting your focus toward rebuilding a healthy and positive life. Establishing a strong support network with friends, family, or even a counselor can provide comfort and guidance during this transition. Additionally, cultivating new, healthy relationships is important relationships based on respect, understanding, and open communication. By focusing on self-growth and positive connections, you can gradually overcome the trauma of divorce and move forward with resilience.";
        } else if (selectedOption.id === "2") {
            answer.innerHTML = "The loss of a family member is one of lifes most profound and challenging experiences. Death, though a natural part of existence, can leave us with feelings of emptiness, grief, and even anger. Accepting the law of nature can be difficult, but it is essential in helping us find peace. Understanding that death is inevitable and beyond our control is the first step in moving forward. While we cannot change the outcome, we can honor the memories of our loved ones and cherish the impact they had on our lives.<br><br> Praying for the departed soul and wishing them peace can be a comforting ritual. It helps to release feelings of attachment while keeping their memory alive in a positive way. Surrounding ourselves with supportive family and friends, or even seeking professional counseling, can provide emotional relief and help us process the loss. Allow yourself to grieve, but also remember to celebrate their life and the moments you shared. By focusing on healing, we can gradually find strength and acceptance, allowing us to move forward while keeping our loved ones close in our hearts.";
        } else if (selectedOption.id === "3") {
            answer.innerHTML = "Financial issues are a widespread challenge that can bring stress and tension into a household, often leading to conflicts if not managed properly. To navigate these difficulties, families need to adopt wise budgeting practices. This involves assessing income, prioritizing essential expenses, and setting limits on non-essential spending. Saving a portion of income, no matter how small, can gradually create a financial cushion for emergencies, easing the burden during tough times. Additionally, family members who are capable of working can contribute to the household budget, sharing the financial responsibility and reducing pressure on any one person.<br><br>Open communication about finances is also essential. Regular discussions about financial goals, expenses, and savings can foster a sense of shared responsibility and help avoid misunderstandings. Families may also consider ways to increase income, such as taking on part-time work or developing new skills to improve job opportunities. By working together and practicing discipline in spending and saving, families can build a more stable financial foundation, helping to alleviate the stress that often accompanies financial struggles.";






    
        }
    } else {
        answer.innerHTML = "Please select an option to get specific advice.";
    }
}
