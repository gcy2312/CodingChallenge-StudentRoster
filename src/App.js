import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { StudentsList } from './components/StudentsList/StudentsList';
import { FloatingLabel } from 'react-bootstrap';

const jsonReturn = {
  "students": [
    { "city": "Fushë-Muhurr", "company": "Yadel", "email": "iorton0@imdb.com", "firstName": "Ingaberg", "grades": ["78", "100", "92", "86", "89", "88", "91", "87"], "id": "1", "lastName": "Orton", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg", "skill": "Oracle" },
    { "city": "Sanghan", "company": "Avamm", "email": "cboards1@weibo.com", "firstName": "Clarke", "grades": ["75", "89", "95", "93", "99", "82", "89", "76"], "id": "2", "lastName": "Boards", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg", "skill": "Sports" },
    { "city": "Kugesi", "company": "Skalith", "email": "lromanet2@wired.com", "firstName": "Laurens", "grades": ["88", "90", "79", "82", "81", "99", "94", "73"], "id": "3", "lastName": "Romanet", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg", "skill": "Employee Handbooks" },
    { "city": "Krajan", "company": "Mybuzz", "email": "bskitt3@aboutads.info", "firstName": "Berti", "grades": ["88", "93", "92", "81", "95", "98", "77", "94"], "id": "4", "lastName": "Skitt", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg", "skill": "Nutrition Education" },
    { "city": "Huiqi", "company": "Avavee", "email": "msummerley4@craigslist.org", "firstName": "Mureil", "grades": ["71", "81", "72", "92", "79", "82", "91", "90"], "id": "5", "lastName": "Summerley", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/consequaturdelectusquis.jpg", "skill": "ISO 14971" },
    { "city": "Jianghong", "company": "Twinte", "email": "rcoryndon5@cargocollective.com", "firstName": "Robbyn", "grades": ["97", "92", "72", "99", "92", "92", "79", "96"], "id": "6", "lastName": "Coryndon", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg", "skill": "Cinema 4D" },
    { "city": "Sanxi", "company": "Buzzster", "email": "seykel6@examiner.com", "firstName": "Sheena", "grades": ["74", "95", "75", "95", "85", "97", "88", "85"], "id": "7", "lastName": "Eykel", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg", "skill": "Ulead VideoStudio" },
    { "city": "Huancheng", "company": "Edgeblab", "email": "mewen7@ycombinator.com", "firstName": "Minnnie", "grades": ["80", "100", "97", "78", "99", "99", "76", "85"], "id": "8", "lastName": "Ewen", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nesciuntrerumlibero.jpg", "skill": "Vulcan" },
    { "city": "Luoxiong", "company": "Fadeo", "email": "riban8@hubpages.com", "firstName": "Rory", "grades": ["70", "100", "75", "96", "83", "90", "94", "92"], "id": "9", "lastName": "Iban", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autemporroplaceat.jpg", "skill": "EE4" },
    { "city": "Toulon", "company": "Yakidoo", "email": "lroxby9@cam.ac.uk", "firstName": "Lenna", "grades": ["70", "99", "81", "83", "78", "95", "81", "76"], "id": "10", "lastName": "Roxby", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/doloribusquitempora.jpg", "skill": "LPS" },
    { "city": "Lazo", "company": "Photolist", "email": "rfitzalana@parallels.com", "firstName": "Rosalynd", "grades": ["98", "93", "78", "87", "99", "89", "97", "81"], "id": "11", "lastName": "FitzAlan", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg", "skill": "Geography" },
    { "city": "Bichura", "company": "Babblestorm", "email": "srapellib@adobe.com", "firstName": "Stephanie", "grades": ["83", "97", "70", "96", "75", "98", "90", "71"], "id": "12", "lastName": "Rapelli", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/enimpariaturoptio.jpg", "skill": "Identity Management" },
    { "city": "Chvalšiny", "company": "Mynte", "email": "mmacdirmidc@plala.or.jp", "firstName": "Maire", "grades": ["87", "73", "85", "98", "73", "95", "75", "97"], "id": "13", "lastName": "MacDirmid", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg", "skill": "Outdoor Advertising" },
    { "city": "Itaparica", "company": "Photospace", "email": "nshepherdd@desdev.cn", "firstName": "Nicoline", "grades": ["90", "73", "88", "95", "71", "100", "80", "86"], "id": "14", "lastName": "Shepherd", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nonipsaet.jpg", "skill": "Amazon VPC" },
    { "city": "Praia da Vitória", "company": "Vitz", "email": "ythornse@github.com", "firstName": "Yoshi", "grades": ["78", "78", "96", "92", "80", "82", "91", "99"], "id": "15", "lastName": "Thorns", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg", "skill": "DMR" },
    { "city": "Sambir", "company": "Twitterwire", "email": "mtothef@shutterfly.com", "firstName": "Marna", "grades": ["88", "74", "76", "89", "75", "97", "75", "86"], "id": "16", "lastName": "Tothe", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg", "skill": "PFI" },
    { "city": "Sarulla", "company": "Blogpad", "email": "okearyg@g.co", "firstName": "Orelia", "grades": ["78", "92", "86", "80", "82", "95", "76", "84"], "id": "17", "lastName": "Keary", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/enimpariaturoptio.jpg", "skill": "General Surgery" },
    { "city": "Ochakovo-Matveyevskoye", "company": "Mydeo", "email": "mswaith@cafepress.com", "firstName": "Moses", "grades": ["84", "82", "92", "74", "87", "98", "86", "73"], "id": "18", "lastName": "Swait", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/velitnonquibusdam.jpg", "skill": "Sales Tax" },
    { "city": "Youxi Chengguanzhen", "company": "Avaveo", "email": "fnusseyi@skyrock.com", "firstName": "Fonsie", "grades": ["100", "75", "84", "91", "100", "97", "98", "87"], "id": "19", "lastName": "Nussey", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/remtemporavelit.jpg", "skill": "Urbanism" },
    { "city": "Limoges", "company": "Tazzy", "email": "srydingsj@phoca.cz", "firstName": "Skelly", "grades": ["89", "81", "77", "93", "96", "96", "70", "79"], "id": "20", "lastName": "Rydings", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/etporroalias.jpg", "skill": "IFTA" },
    { "city": "Łobżenica", "company": "Quatz", "email": "obrennekek@yellowbook.com", "firstName": "Olly", "grades": ["81", "74", "77", "82", "74", "88", "86", "87"], "id": "21", "lastName": "Brenneke", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/velitnonquibusdam.jpg", "skill": "ATM Networks" },
    { "city": "Divo", "company": "Gigazoom", "email": "nbadwickl@nifty.com", "firstName": "Norby", "grades": ["73", "99", "91", "92", "85", "96", "95", "73"], "id": "22", "lastName": "Badwick", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/delenitiestdolorum.jpg", "skill": "Media Relations" },
    { "city": "Sortavala", "company": "Eamia", "email": "mmichiem@nifty.com", "firstName": "Melody", "grades": ["100", "83", "76", "71", "93", "95", "73", "88"], "id": "23", "lastName": "Michie", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg", "skill": "PC Games" },
    { "city": "Taupo", "company": "Midel", "email": "jwillougheyn@psu.edu", "firstName": "Janice", "grades": ["71", "80", "83", "99", "91", "95", "81", "75"], "id": "24", "lastName": "Willoughey", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/dolordoloremassumenda.jpg", "skill": "Kondor+" },
    { "city": "Krajandadapmulyo", "company": "Wikibox", "email": "ggallymoreo@mashable.com", "firstName": "Geraldine", "grades": ["97", "71", "89", "85", "85", "87", "92", "75"], "id": "25", "lastName": "Gallymore", "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/sitlaborecorrupti.jpg", "skill": "WTL" }
  ]
}


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tagSearchTerm, setTagSearchTerm] = useState('');
  const [displayStudents, setDisplayStudents] = useState([]);
  const [studentTags, setStudentTags] = useState([]);
  const [filterStudents, setFilterStudents] = useState([]);
  const [error, setError] = useState('');

  function calculateAverage(array) {
    var total = 0;
    var count = 0;
    array.forEach(function (item, index) {
      total += item;
      count++;
    });
    return total / count;
  }

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };



  async function rawDataTransform() {
    let response = jsonReturn['students'];
    const studentsTransform = response.map((c, idx) => {
      const city = c.city;
      const company = c.company;
      const email = c.email;
      const firstName = c.firstName;
      const id = c.id;
      const lastName = c.lastName;
      const pic = c.pic;
      const skill = c.skill;
      const grades = c.grades.map(Number);
      const average = calculateAverage(c.grades.map(Number));
      const tags = studentTags;
      return { city: city, firstName: firstName, lastName: lastName, company: company, email: email, id: id, pic: pic, skill: skill, average: average, grades: grades, tags: tags };
    });
    return studentsTransform;
  }

  const filter = () => {
    const results = displayStudents.filter(
      student =>
        student.firstName.toLowerCase().includes(searchTerm) || student.lastName.toLowerCase().includes(searchTerm)
    );
    setDisplayStudents(results);
    setFilterStudents(results);
  }

  useEffect(() => {

    rawDataTransform().then((studentsTransform) => {
      setDisplayStudents(studentsTransform);

      if (searchTerm !== "") {
        filter();
      }
    });
  }, [studentTags, searchTerm]);


  return (
    <div className="App">
      <Form>
        <Form.Group>
          <FloatingLabel controlId="floatingInput"
            label="Search by name"
            className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleChange} />
          </FloatingLabel>
        </Form.Group>

      </Form>






      <StudentsList
        displayStudents={displayStudents}
        setStudentTags={setStudentTags}
        setDisplayStudents={setDisplayStudents}
      />


    </div>
  );
}

export default App;
