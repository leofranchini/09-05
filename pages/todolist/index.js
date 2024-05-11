const lsVisistorsKey = '@visitorsCounter'

const defaultLsVisitors = {
  count: 0,
  lastVisit: getCurrentDateAndTime(),
}

function getCurrentDateAndTime() {
  const locale = 'pt-BR'
  const date = new Date()

  options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  const time = new Intl.DateTimeFormat(locale, options).format(date)
  return time
}

function countVisitors() {
  const lsVisitors =
    localStorage.getItem(lsVisistorsKey) || JSON.stringify(defaultLsVisitors)
  const lsVisitorsObj = JSON.parse(lsVisitors)

  lsVisitorsObj.count++
  lsVisitorsObj.lastVisit = getCurrentDateAndTime()

  localStorage.setItem(lsVisistorsKey, JSON.stringify(lsVisitorsObj))

  const p = document.createElement('p')
  p.id = 'visitors-counter'
  p.textContent = `Esta página foi visitada ${lsVisitorsObj.count} vezes. A última visita foi: ${lsVisitorsObj.lastVisit}`

  const footer = document.querySelector('footer')

  footer.appendChild(p)
}

document.addEventListener('DOMContentLoaded', function () {
  countVisitors()
})



const tarefaForm = document.querySelector("#lista-form")
const sectionTarefa = document.querySelector(".section1")

tarefaForm.addEventListener("submit", (e) =>{
  e.preventDefault();

  const tarefaInput = document.querySelector("#tarefa")
  const descInput = document.querySelector("#descricao")

  localStorage.setItem("tarefa", tarefaInput.value)
  localStorage.setItem("desc", descInput.value)

  tarefaInput.value = "";
  descInput.value ="";

  mostrarTarefa();
});

function mostrarTarefa(){
  const tarefa = localStorage.getItem("tarefa")
  const desc = localStorage.getItem("desc")

  if(sectionTarefa){
    const conteudo = `<p>Nome da tarefa: ${tarefa}<p> Descrição: ${desc}`
  
  sectionTarefa.innerHTML= conteudo;
  }else{
    console.error("nao vai dar erro eu confio")
  }
}

