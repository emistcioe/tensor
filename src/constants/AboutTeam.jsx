// importing multiple images from a directory dynamically
const nameFile = (r) => {  // r is object Datatype with key being file name in './name.jpg' format and value being reference to that image
  let images = {}; // creating empty images object Datatype
  r.keys().forEach((key) => {
    const name = key.replace('./', '').split('.')[0]; // removes './' and file extension
    images[name] = r(key); // r(key) returns actual reference to the image
  });
  return images;
};
const images = nameFile(require.context('../images/members', false, /\.(png|jpe?g|svg)$/));

const CurrentTeam = [
   {
        Image: images['Sandesh'],
        Name: "Sandesh Kandel",
        Role: "Co-ordinator",
        facebook: "https://www.facebook.com/Anonymous.702",
        instagram: "https://www.instagram.com/sandesh_kandel121",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Samiksha'],
        Name: "Samiksha Dhakal",
        Role: "Marketing Associate",
        facebook: "https://www.facebook.com/sameeksha13",
        instagram: "https://www.instagram.com/_sameekshadhakal",
        github: "https://www.github.com/sameekshadhakal",
        linkedin: "https://www.linkedin.com/in/samiksha-dhakal"
    },

        {
        Image: images['Pooja'],
        Name: "Pooja Adhikari",
        Role: "Joint secretary",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Simonee'],
        Name: "Simonee Bajagain",
        Role: " Lead Marketing Associate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Prince'],
        Name: "Prince Kumar Shah",
        Role: "Software Coordinator",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Bipin'],
        Name: "Bipin Shrestha",
        Role: "Lead Graphics Designer",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },

    {
        Image: images['Biraj'],
        Name: "Biraj Rijal",
        Role: "Research Advocate",
        facebook: "https://www.facebook.com/biraj.rijal.90",
        instagram: "https://www.instagram.com/birajrijal08",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Dhiraj'],
        Name: "Dhiraj Jung Pandey",
        Role: "Research Advocate",
        facebook: "https://www.facebook.com/dheeraj.llchhetri",
        instagram: "https://www.instagram.com/dheeraj.ll",
        github: "https://github.com/Dheerajll",
        linkedin: "https://www.linkedin.com/in/dheeraj-chhetri-9b9b56352"
    },
    {
        Image: images['Santosh'],
        Name: "Santosh Gadtaula",
        Role: "Research Advocate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Dev'],
        Name: "Dev Chandra Adhikari",
        Role: "Research Advocate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Alok'],
        Name: "Alok Sharma",
        Role: "Research Advocate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Shikshit'],
        Name: "Shikshit Bhattarai",
        Role: "Research Advocate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Sandip'],
        Name: "Sandip Dhakal",
        Role: "Social Media Manager",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    
    {
        Image: images['Subigya'],
        Name: "Subigya Tripathi",
        Role: "Marketing Associate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Prakash'],
        Name: "Prakash Kumar Badaila",
        Role: "Junior research Advocate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    {
        Image: images['Rakhi'],
        Name: "Rakhi Jha",
        Role: "junior research Advocate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    
    {
        Image: images['Subash'],
        Name: "Subash Shrestha",
        Role: "junior research Advocate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    }
]

export default CurrentTeam;