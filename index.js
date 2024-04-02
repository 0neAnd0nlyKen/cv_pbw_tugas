fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        lahir: 'Cikarang/19 Juni 2003',
        pendidikan:'SMA Negeri 21 Jakarta (2018 - 2022)<br>Universitas Udayana S1 Informatika (2022 - ongoing)',
        pengalaman: 'peserta seleksi UNUD National University Debating Championship 2024<br>peserta seleksi UNUD Gemastik Divisi Pemrograman 2023<br>panitia sie 3D INVENTION 2023 ',
        skills:'berbicara bahasa inggris<br>figma<br>competetive programming<br>panitia sie 3D',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => {
    let lahirJSON = document.createElement('div');
    lahirJSON.innerHTML = json.lahir;
    let lahir=document.getElementById('lahir');
    lahir.appendChild(lahirJSON);

    let pendidikanJSON = document.createElement('div');
    pendidikanJSON.innerHTML = json.pendidikan;
    let pendidikan=document.getElementById('pendidikan');
    pendidikan.appendChild(pendidikanJSON);

    let pengalamanJSON = document.createElement('div');
    pengalamanJSON.innerHTML = json.pengalaman;
    let pengalaman=document.getElementById('pengalaman');
    pengalaman.appendChild(pengalamanJSON);

    let skillsJSON = document.createElement('div');
    skillsJSON.innerHTML = json.skills;
    let skills=document.getElementById('skills');
    skills.appendChild(skillsJSON);    
});


