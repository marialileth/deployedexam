var $classList = $('.class-list__list'),
	$tabsNav = $('.tabbed-overview__tab-content'),
	tabsNavContent = '<div class="section-content section-content--narrow"><h2 class="tabbed-overview__title"><strong>WHAT IS YOUR FITNESS GOAL?</strong></h2><p class="tabbed-overview__copy"">From Flexibility to HIIT and everything in between. Choose the type of exercise you enjoy and we can then personalise our program suggesstions to suit your needs.</p><br /><a data-target="Stronger" class="btn heroBanner__btn" id="tabStronger">GET STRONGER</a><a data-target="Leaner" class="btn heroBanner__btn" id="tabLeaner">GET LEANER</a><a data-target="Faster" class="btn heroBanner__btn" id="tabFaster">GET FASTER</a></div>',
	classes = [
		{ 
			description : 'THE FULL-BODY WEIGHTS WORKOUT, BODYPUMP IS FOR ANYONE LOOKING TO GET LEAN, TONED AND FIT – FAST', 
			exercise_type : 'Strength', 
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7577/32249f7c-3ba6-49e0-abfa-253396e035ee/classes-listing-bodypump.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1772/5dabe338-f6da-4d66-9d5d-327027ce36f8/bodypump-logo.png',
			url : '/workouts/fitness-classes/bodypump/',
			disclaimer : 'Also available as a Virtual class and On Demand',
			goal : ['Stronger']
		},
		{ 
			description : 'Exercising muscles around the core of your body, CXWORX', 
			exercise_type : 'Strength', 
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7580/93cd3bd2-e76f-4a3f-88ee-fdc0f0a1052a/classes-listing-cxworx.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1788/4b851790-a1ab-4511-ac75-123b7794bac2/cxworx-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/cxworx/',
			disclaimer : 'Also available as a Virtual class and On Demand',
			goal : ['Stronger']
		},
		{ 
			description : 'The 30-minute high-intensity interval training workout, designed to improve strength and build lean muscle.', 
			exercise_type : 'High-intensity interval training', 
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7391/6d3c9cb7-3dee-4676-abae-370bf6a05410/classes-listing-modules_gritstrength.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/2034/45cbf47a-be55-4110-b5f8-4c50b81edd14/les-mills-grit-strength-logo-black.png',
			url : 'https://www.lesmills.com/workouts/high-intensity-interval-training/les-mills-grit-strength/',
			disclaimer : 'Also available On Demand',
			goal : ['Stronger']
		},
		{
			description : 'The high-energy, martial arts-inspired, non-contact workout. Punch, kick and strike your way to fitness',
			exercise_type : 'Core',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7578/a9a8231c-7b8d-446e-9cdf-726768dbc8da/classes-listing-bodycombat.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1786/66b59837-2286-4feb-98c8-860c0627eaa6/bodycombat-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/bodycombat/',
			disclaimer : 'Also available as a Virtual class and On Demand',
			goal : [ 'Leaner' , 'Faster' ]
		},
		{
			description : 'The yoga-based class that will improve your mind, your body and your life. Strengthen your entire body and leave feeling calm and centered.',
			exercise_type : 'Flexibility',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7579/4b0716f3-2f27-43fc-bca0-56a27bf0ddcd/classes-listing-bodybalance.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1787/acf15c49-8b92-4fd0-83a8-ca49c1abd690/bodybalance-logo.jpg',
			url : 'https://www.lesmills.com/workouts/fitness-classes/bodybalance/',
			disclaimer : 'Also available as a Virtual class and On Demand',
			goal : ['Leaner']
		},
		{
			description : 'The high-energy fitness class with moves that cater for total beginners to total addicts and gets you fit for the sport of life.',
			exercise_type : 'Cardio',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7581/86fd0a8f-cd7f-4e96-bfe4-126edf17b653/classes-listing-bodyattack.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1789/edd738be-b1a0-43e6-a9e5-069258907e71/bodyattack-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/bodyattack/',
			disclaimer : '',
			goal : [ 'Leaner', 'Faster' ]
		},
		{
			description : 'The indoor cycling class, set to the rhythm of motivating music. Burn calories and get fit fast.',
			exercise_type : 'Cardio',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/1796/45c53646-c6da-4e1a-aa61-c255579dd8d7/cy_27-cycle-relaunch_rpm-webpage-tile.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1790/14f58940-67b2-4364-9025-5bb7f8f415ff/rpm-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/rpm/',
			disclaimer : 'Also available as a Virtual class and On Demand',
			goal : [ 'Leaner' , 'Faster' ]
		},
		{
			description : 'The fun-loving, insanely addictive dance workout – no dance experience required.',
			exercise_type : 'Dance',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7387/71c16a63-500d-4a17-9e2e-191aeba829fb/classes-listing-modules_shbam.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1791/7102518c-500a-4423-9aef-610469508b7c/shbam-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/shbam/',
			disclaimer : 'Also available as a Virtual class and On Demand',
			goal : ['Leaner']
		},
		{
			description : 'The ultimate music and dance experience. If you want to dance, there’s nothing like it.',
			exercise_type : 'Dance',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7388/a0d7d6e2-b7a5-4058-a8cc-82272bfca611/classes-listing-modules_bodyjam.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1792/928e8726-3c66-4590-8a7c-6bb249f2d2db/bodyjam-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/bodyjam/',
			disclaimer : '',
			goal : ['Leaner']
		},
		{
			description : 'THE FULL-BODY CARDIO WORKOUT TO REALLY TONE YOUR BUTT AND THIGHS. BURN CALORIES AND LEAVE BUZZING WITH SATISFACTION',
			exercise_type : 'Cardio',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7389/be6fa2ae-08b4-4015-98bb-25675b0ba960/classes-listing-modules_bodystep.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1793/fa90deb5-11aa-4be4-bae9-c37b807cf087/bodystep-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/bodystep/',
			disclaimer : 'ALSO AVAILABLE ON DEMAND',
			goal : ['Leaner']
		},
		{
			description : 'The optimal mix of strength, cardio and core training',
			exercise_type : 'Cross Training',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7390/0fc1274c-b7ba-4ffd-85bb-94bc0779c66f/classes-listing-modules_bodyvive-31.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1794/b5c4a594-db8d-47d7-98b0-ed50396e92af/bodyvive-31-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/bodyvive/',
			disclaimer : '',
			goal : ['Leaner']
		},
		{
			description : 'EXPERIENCE THE UNKNOWN.',
			exercise_type : 'Cardio',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/1797/0e36f4b3-7e04-4db3-b2ff-e715c48fd860/immersive-image.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/1795/fee91b43-9231-430a-97e3-40341b126d13/the-trip-logo.png',
			url : 'https://www.lesmills.com/workouts/fitness-classes/the-trip/',
			disclaimer : '',
			goal : [ 'Leaner' , 'Faster' ]
		},
		{
			description : 'The 30-minute cycle workout that uses high-intensity interval training to help you smash goals faster.',
			exercise_type : 'High-intensity interval training',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7722/04f09838-9c54-4cc0-9c2c-560dd0dfaa69/classes-listing-sprint.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/2035/3aae8eeb-d24e-4b4e-9dab-3770d58e484f/cy_sprintlogo_600x35.png',
			url : 'https://www.lesmills.com/workouts/high-intensity-interval-training/les-mills-sprint/',
			disclaimer : '',
			goal : ['Faster']
		},
		{
			description : 'The 30-minute high-intensity interval training workout, designed to improve strength and build lean muscle.',
			exercise_type : 'High-intensity interval training',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7391/6d3c9cb7-3dee-4676-abae-370bf6a05410/classes-listing-modules_gritstrength.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/2034/45cbf47a-be55-4110-b5f8-4c50b81edd14/les-mills-grit-strength-logo-black.png',
			url : 'https://www.lesmills.com/workouts/high-intensity-interval-training/les-mills-grit-strength/',
			disclaimer : '',
			goal : ['Faster']
		},
		{
			description : 'The 30-minute high-intensity interval training plyometric-based workout, designed to make you perform like an athlete.',
			exercise_type : 'High-intensity interval training',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7392/5e197fa9-ea15-44e8-b3bd-1f99eb133350/classes-listing-modules_gritplyo.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/2062/e0d7a517-f348-4aab-bac1-60b908b273fe/les-mills-grit-plyo-logo-black.png',
			url : 'https://www.lesmills.com/workouts/high-intensity-interval-training/les-mills-grit-plyo/',
			disclaimer : 'Also available On Demand',
			goal : ['Faster']
		},
		{
			description : 'The 30-minute high-intensity interval training workout that improves cardiovascular fitness, increases speed and maximizes calorie burn.',
			exercise_type : 'High-intensity interval training',
			thumbnail : 'https://lmimirror3.azureedge.net/static/media/7393/4bfe6448-008b-464e-a9ac-49857f0a1a03/classes-listing-modules_gritcardio.jpg',
			logo : 'https://lmimirror3.azureedge.net/static/media/2065/ab7e64e6-3827-4912-adb9-18af7ae8a6fe/les-mills-grit-cardio-logo-black.png',
			url : 'https://www.lesmills.com/workouts/high-intensity-interval-training/les-mills-grit-cardio/',
			disclaimer : 'Also available On Demand',
			goal : ['Faster']
		}
	];

function getWorkout(classGoal, nav) {
	$(nav).on('click', function(){
		var target = $(this).data('target'),
			classesLength = classes.length;

		$classList.html('');
		
		for (var i = 0; i < classesLength; i++) {
			for (var x = 0; x < classes[i].goal.length; x++) {
				if(classes[i].goal[x] === classGoal) {
					var content = '<li class="class-list__item"><div class="section-content"><div class="class-list__item__inner"><div class="class-list__thumb"><img src="' + classes[i].thumbnail + '" alt=""></div><h2 class="class-list__logo"><img src="' + classes[i].logo + '" alt=""></h2><p class="class-list__description">' + classes[i].description + '</p><small class="class-list__disclaimer">' + classes[i].disclaimer + '</small><a href="' + classes[i].url + '" class="class-list__footer"><div class="class-list__type  class-list__type--no-calories"><h3 class="class-list__sub-header">' + classes[i].exercise_type + '</h3><span class="class-list__value">Dance</span></div></a></div></div></li>';
					$class_list.append(content);
				}
			}
		}
	});	
}

$tabsNav.html(tabsNavContent);
getWorkout('Stronger', '#tabStronger');
getWorkout('Leaner', '#tabLeaner');
getWorkout('Faster', '#tabFaster');

// Style
$('head').append('<style>.tabbed-overview__title{color: #2b2b2b;}.btn.heroBanner__btn{background: #00a077; color: #fff;}#tabLeaner{margin: 0 45px;}@media screen and (max-width: 600px) { .btn.heroBanner__btn { display: block; margin: 10px auto !important; } }</style>');






