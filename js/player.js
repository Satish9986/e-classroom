let content = {
	"ram": [
		{
		  "id": 1,
		  "course_id": 1,
		  "title": "fgdrf tgdf",
		  "category_name": "ram",
		  "link": "http://127.0.0.1:8000/storage/course/3NgDyTMhrDJ2jalNMwiHGcZP8zS60BuzrZhAvTEl.jpg",
		  "document": "HVlkkKpXdw2buBCQ0eUntbqgqndXy8rfLGRBpldH.pdf",
		  "created_at": "2022-01-02T12:51:28.000000Z",
		  "updated_at": "2022-01-02T12:51:28.000000Z"
		},
		{
		  "id": 2,
		  "course_id": 1,
		  "title": " ytrfy rt",
		  "category_name": "ram",
		  "link": "http://127.0.0.1:8000/storage/course/3NgDyTMhrDJ2jalNMwiHGcZP8zS60BuzrZhAvTEl.jpg",
		  "document": "HVlkkKpXdw2buBCQ0eUntbqgqndXy8rfLGRBpldH.pdf",
		  "created_at": "2022-01-02T12:51:28.000000Z",
		  "updated_at": "2022-01-02T12:51:28.000000Z"
		},
		{
		  "id": 5,
		  "course_id": 1,
		  "title": "hb6456bh",
		  "category_name": "ram",
		  "link": "http://127.0.0.1:8000/storage/course/3NgDyTMhrDJ2jalNMwiHGcZP8zS60BuzrZhAvTEl.jpg",
		  "document": "HVlkkKpXdw2buBCQ0eUntbqgqndXy8rfLGRBpldH.pdf",
		  "created_at": "2022-01-02T12:51:28.000000Z",
		  "updated_at": "2022-01-02T12:51:28.000000Z"
		},
		{
		  "id": 8,
		  "course_id": 1,
		  "title": "hb6456bh",
		  "category_name": "ram",
		  "link": "http://127.0.0.1:8000/storage/course/3NgDyTMhrDJ2jalNMwiHGcZP8zS60BuzrZhAvTEl.jpg",
		  "document": "HVlkkKpXdw2buBCQ0eUntbqgqndXy8rfLGRBpldH.pdf",
		  "created_at": "2022-01-02T12:51:28.000000Z",
		  "updated_at": "2022-01-02T12:51:28.000000Z"
		}
	],
	"sita" : [
		{
		  "id": 1,
		  "course_id": 1,
		  "title": "hb6456bh",
		  "category_name": "sita",
		  "link": "http://127.0.0.1:8000/storage/course/3NgDyTMhrDJ2jalNMwiHGcZP8zS60BuzrZhAvTEl.jpg",
		  "document": "HVlkkKpXdw2buBCQ0eUntbqgqndXy8rfLGRBpldH.pdf",
		  "created_at": "2022-01-02T12:51:28.000000Z",
		  "updated_at": "2022-01-02T12:51:28.000000Z"
		},
		{
		  "id": 2,
		  "course_id": 1,
		  "title": "hb6456bh",
		  "category_name": "sita",
		  "link": "http://127.0.0.1:8000/storage/course/3NgDyTMhrDJ2jalNMwiHGcZP8zS60BuzrZhAvTEl.jpg",
		  "document": "HVlkkKpXdw2buBCQ0eUntbqgqndXy8rfLGRBpldH.pdf",
		  "created_at": "2022-01-02T12:51:28.000000Z",
		  "updated_at": "2022-01-02T12:51:28.000000Z"
		},
		{
		  "id": 3,
		  "course_id": 1,
		  "title": "hb6456bh",
		  "category_name": "sita",
		  "link": "http://127.0.0.1:8000/storage/course/3NgDyTMhrDJ2jalNMwiHGcZP8zS60BuzrZhAvTEl.jpg",
		  "document": "HVlkkKpXdw2buBCQ0eUntbqgqndXy8rfLGRBpldH.pdf",
		  "created_at": "2022-01-02T12:51:28.000000Z",
		  "updated_at": "2022-01-02T12:51:28.000000Z"
		},
		{
		  "id": 4,
		  "course_id": 1,
		  "title": "hb6456bh",
		  "category_name": "sita",
		  "link": "http://127.0.0.1:8000/storage/course/3NgDyTMhrDJ2jalNMwiHGcZP8zS60BuzrZhAvTEl.jpg",
		  "document": "HVlkkKpXdw2buBCQ0eUntbqgqndXy8rfLGRBpldH.pdf",
		  "created_at": "2022-01-02T12:51:28.000000Z",
		  "updated_at": "2022-01-02T12:51:28.000000Z"
		}
	]
}

function play(newvideo, buttonNo){
    let oldvideo = document.getElementById('video').src;
    if(newvideo !== oldvideo){
        document.getElementById('video').src = newvideo;
    }           
    let allButton = document.getElementsByClassName('video-button');
                
    for(let i = 0; i < allButton.length; i++){
        allButton[i].style.cssText = "background-color: white; color:#e9a028; border:2px solid #e9a028; font-weight:normal;";
    }
    allButton[buttonNo].style.cssText = "background-color: #fff7f5; color:#ee3e10; border:2px solid #ee3e10; font-weight:bold;";
}

function course(course){
    let courseName = course[0].toUpperCase() + course.substring(1);
    let data = "<div id='video-content-nav-heading' onclick='backToCourses()'><h3><i class='fas fa-arrow-left'></i>" + courseName + "</h3></div>"
    data += "<div id='course-button-container'>";

    if(course === "ram"){
        content.ram.map((lecture, index) => {
            data += "<div class='video-button'>";
            data += "<span class='play-span' onclick=play('"+ lecture.link +"',"+ index +")>" + lecture.title + "</span>";
            data += "<span class='download-span'><a href='" + lecture.document + "' download><i class='fas fa-file-download download-button'></i></a></span>";
            data += "</div>";
        })
    }
    if(course === "sita"){
        content.sita.map((lecture, index) => {
            data += "<div class='video-button'>";
            data += "<span class='play-span' onclick=play('"+ lecture.link +"'," + index + ")>" + lecture.title + "</span>";
            data += "<span class='download-span'><a href='" + lecture.document + "' download><i class='fas fa-file-download download-button'></i></a></span>";
            data += "</div>";
        })
    }     
    data += "</div>"; 
    document.getElementById('video-content').innerHTML = data;
}

function backToCourses(){
    let data = "<div id='video-content-heading'><h3> Our Courses </h3></div>";
    data += "<div id='course-button-container'>"; 
    for(let course in content){
        let courseName = course[0].toUpperCase() + course.substring(1);
        data += "<button class='course-button' onclick=course('"+ course +"')>"+ courseName +"</button>"
    }
    data += "</div>";
    
    document.getElementById('video-content').innerHTML = data;
    document.getElementById('video').src = 'https://www.youtube.com/embed/2Gg6Seob5Mg';
}