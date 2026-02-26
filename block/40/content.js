var quizLessonBoth = "lesson";
var lessonNumber = 40;
var numOfAllQuiz = 42;
var lessonTitle = "Les pronoms d'objet I (Object pronouns)";var btnColor = ["#1EEC00","#163F00","#90E700","#254800"];var quesToRemove = [];var startNarration = ["Object pronouns are the words that replace the previously mentioned object, like a noun or a person.","In French, the object pronoun is placed before a verb.","Like many words in French, they compress in front of a vowel or mute H."];var narration = ["","","","",""];
var titleSkip = [false,false,false,false];var forTitles = ["Me","Te","Nous","Vous"];var engTitles = ["Me","You (informal)","Us","You (formal / plural)"];var forSideTitles = ["Me","Te","Nous","Vous"];var engSideTitles = engTitles;var exampleNums = [4,4,4,4];

var forExamples = ["Tu <strong>me</strong> déranges.","Mon chien <strong>me</strong> fait rire.","Pourquoi <strong>m'</strong>appelles-tu?","Pouvez-vous <strong>me</strong> dire comment faire?","Ne bouge pas, je ne veux pas <strong>te</strong> faire mal.","Je <strong>t'</strong>aime.","Je vais <strong>te</strong> lancer le disque.","Tu peux glisser, je <strong>te</strong> regarde.","Le film <strong>nous</strong> a fait peur.","Il <strong>nous</strong> a donné des fleurs.","Tu <strong>nous</strong> as menti.",'%"Assiettes" literally means "plates", as in the object. You could also say "apporter nos plats", which means "bring our meals".%Il <strong>nous</strong> a apporté nos assiettes.',"Au revoir, je <strong>vous</strong> écrirai.","Je suis heureux de <strong>vous</strong> rencontrer.","Je ne peux plus <strong>vous</strong> attendre, je dois partir!","Elle va <strong>vous</strong> chanter des chansons ce soir."];

var engExamples = ["You are bothering <em>me.</em>","My dog makes <em>me</em> laugh.","Why are you calling <em>me</em>?","Can you tell <em>me</em> how to do it?","Don't move, I don't want to hurt <em>you</em>.","I love <em>you</em>.","I will throw <em>you</em> the disk.","You can slide down, I am watching <em>you</em>.","The movie scared <em>us</em>.","He gave <em>us</em> some flowers.","You lied to <em>us</em>.","He brought <em>us</em> our plates.","Goodbye, I will write to <em>you</em>.","I am happy to meet <em>you</em>.","I can't wait for <em>you</em> anymore, I have to leave!","She is going to sing <em>you</em> some songs tonight."];

var forExtra1 = ["Oui, mais elle ne <strong>me</strong> remarque pas.","Je doute que vous <strong>me</strong> connaissiez.","Je veux que vous <strong>me</strong> prêtiez vos notes.","Vous <strong>me</strong> connaîtrez mieux dans quelques jours.","D'accord. C'est un peu tôt, mais ça <strong>me</strong> va.","Je rêve toujours que de gros yeux <strong>me</strong> regardent du ciel.","Je louerais une voiture, mais mon frère <strong>me</strong> prête la sienne."];

var engExtra1 = ["Yes, but she doesn't notice <em>me</em>.","I doubt that you know <em>me</em>.","I want that you lend <em>me</em> your notes.","You will know <em>me</em> better in a few days.","Okay. It's a little early, but it's okay with <em>me</em>.","I always dream that big eyes look at <em>me</em> from the sky.","I would rent a car, but my brother is lending <em>me</em> his."];

var imageExtra1 = ["../../convo/images/convo61A.jpg","../../block/89/images/pic9.jpg","../../verb/141/images/pic5.jpg","../../verb/58/images/pic5.jpg","../../convo/images/convo29B.jpg","../../verb/36/images/pic2.jpg","../../verb/78/images/pic6.jpg"];

var fastExtra1 = ["../../convo/61/sounds/1fast6","../../block/89/sounds/sound17","../../verb/141/sounds/sound19","../../verb/58/sounds/sound19","../../convo/29/sounds/2fast9","../../verb/36/sounds/sound7","../../verb/78/sounds/sound23"];

var slowExtra1 = ["../../convo/61/sounds/1slow6","../../block/89/sounds/sound18","../../verb/141/sounds/sound20","../../verb/58/sounds/sound20","../../convo/29/sounds/2slow9","../../verb/36/sounds/sound8","../../verb/78/sounds/sound24"];

var forExtra2 = ["Je peux <strong>te</strong> reconduire chez toi?","Tu devrais <strong>te</strong> reposer un peu.","Quand est-ce que je peux <strong>te</strong> revoir?","Je n'ai rien d'autre à <strong>te</strong> donner."];

var engExtra2 = ["Can I drive <em>you</em> home? <i class='qhint'>(informal)</i>","<em>You</em> should rest a little. <i class='qhint'>(informal)</i>","When can I see <em>you</em> again? <i class='qhint'>(informal)</i>","I have nothing else to give <em>you</em>. <i class='qhint'>(informal)</i>"];


var imageExtra2 = ["../../convo/images/convo40A.jpg","../../verb/19/images/pic2.jpg","../../convo/images/convo11B.jpg","../../block/94/images/pic11.jpg"];


var fastExtra2 = ["../../convo/40/sounds/1fast10","../../verb/19/sounds/sound7","../../convo/40/sounds/1fast11","../../block/94/sounds/sound21"];var slowExtra2 = ["../../convo/40/sounds/1slow10","../../verb/19/sounds/sound8","../../convo/40/sounds/1slow11","../../block/94/sounds/sound22"];

var forExtra3 = ["Ça <strong>nous</strong> donne encore trente minutes.","Le patron <strong>nous</strong> dira quoi faire.","Ils <strong>nous</strong> ont servi un bon dîner.","Mon chien mordrait pour <strong>nous</strong> protéger.","Il <strong>nous</strong> a dit de rester ici avec le chien.","D'accord, si vous vous souvenez d'autre chose, n'hésitez pas à <strong>nous</strong> contacter."];var engExtra3 = ["This gives <em>us</em> another thirty minutes.","The boss will tell <em>us</em> what to do.","They served <em>us</em> a great dinner.","My dog would bite to protect <em>us</em>.","He told <em>us</em> to stay here with the dog.","All right, if you remember anything else, please don't hesitate to contact <em>us</em>."];


var imageExtra3 = ["../../convo/images/convo16B.jpg","../../verb/82/images/pic5.jpg","../../verb/134/images/pic6.jpg","../../verb/152/images/pic3.jpg","../../verb/91/images/pic1.jpg","../../convo/images/convo51A.jpg"];var fastExtra3 = ["../../convo/16/sounds/2fast11","../../verb/82/sounds/sound19","../../verb/134/sounds/sound23","../../verb/152/sounds/sound11","../../verb/91/sounds/sound3","../../convo/51/sounds/1fast10"];var slowExtra3 = ["../../convo/16/sounds/2slow11","../../verb/82/sounds/sound20","../../verb/134/sounds/sound24","../../verb/152/sounds/sound12","../../verb/91/sounds/sound4","../../convo/51/sounds/1slow10"];

var forExtra4 = ["Je <strong>vous</strong> dois combien?","Bonjour, je peux <strong>vous</strong> aider?","Je peux <strong>vous</strong> offrir un verre?"];
var engExtra4 = ["How much do I owe <em>you</em>? <i class='qhint'>(formal)</i>","Hello, can I help <em>you</em>? <i class='qhint'>(formal)</i>","Can I offer <em>you</em> a drink? <i class='qhint'>(formal)</i>"];


var imageExtra4 = ["../../convo/images/convo28A.jpg","../../convo/images/convo18A.jpg","../../convo/images/convo39A.jpg"];var fastExtra4 = ["../../convo/28/sounds/1fast10","../../convo/18/sounds/1fast1","../../convo/39/sounds/1fast3"];var slowExtra4 = ["../../convo/28/sounds/1slow10","../../convo/18/sounds/1slow1","../../convo/39/sounds/1slow3"];