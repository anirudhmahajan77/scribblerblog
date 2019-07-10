var btn = document.getElementById('save');
btn.style.display = "none";

function editContent(){
    var btn = document.getElementById('edit');
    btn.style.display = "none";

    var save_btn = document.getElementById('save');
    save_btn.style.display = "";

    var para = document.getElementById('blogBody')
    para.style.border = "3px solid gray";
    para.setAttribute('contenteditable','true')

    var para = document.getElementById('blogTitleNew')
    para.style.border = "3px solid gray";
    para.setAttribute('contenteditable','true')

}

function saveContent(){
    var btn = document.getElementById('save');
    btn.style.display = "none";

    var btn = document.getElementById('edit');
    btn.style.display = "";

    var para = document.getElementById('blogBody')
    para.style.border = "none";
    para.setAttribute('contenteditable','false')

    var para = document.getElementById('blogTitleNew')
    para.style.border = "none";
    para.setAttribute('contenteditable','false')
}

var likes = 0
function like(){
    var btn = document.getElementById('like');
    btn.innerHTML = 'Liked!';
    var content = document.getElementById('liker');
    likes = likes + 1
    content.innerHTML = `${likes} person likes this!`;
}

function comment(){

    var cmnt = document.getElementById('comment').value;
    var holder= `<p id="newComment">${cmnt}</p>`
    var allComment = document.getElementById("newCommentHolder");
    allComment.innerHTML = holder + allComment.innerHTML;
    document.getElementById('comment').value = "";
    
}