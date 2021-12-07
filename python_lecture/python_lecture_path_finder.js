function path_find(loc, s) {
    let is_local = (loc.origin.startsWith('http://127.0.0.1') ? true : false);
    let addr = (is_local ? 'http://127.0.0.1:5500/python_lecture/' : 'https://comseung18.github.io/Coding_Lecture/python_lecture/');
    if (s == "파이썬이란 무엇인가") return addr + "what_is_python.html";
    if (s == "변수") return addr + "python_variable.html";
    if (s == "자료형") return addr + "python_data_type.html";
    if (s == "변수의 응용") return addr + "python_vari_pratice.html";
    if (s == "수식과 연산자") return addr + "python_exp.html";
    return "";
}