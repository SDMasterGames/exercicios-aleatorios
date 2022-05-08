class No:
  def __init__(self, valor):
    self.valor = valor
    self.ant = None

class Album:
  def __init__(self, nome, ano):
      self.ano = ano
      self.nome = nome

  def __str__(self):
    return f"{self.nome}({self.ano})"
        
class Pilha:
  def __init__(self):
    self.inicio = None
  
  def push(self, i):
    novo_no = No(i)
    novo_no.ant = self.inicio
    self.inicio = novo_no

  def pop(self):
    if self.inicio != None:
      i = self.inicio.valor
      self.inicio = self.inicio.ant
      return i

  def top(self):
    i = self.pop()
    self.push(i)
    return i

estante = Pilha()

def inserirVinil():
    name = input('Nome do Disco - ')
    while True:
        ano = int(input('Ano do disco - '))
        if len(str(ano)) != 4:
            print('Ano invalido')
            input('Pressione Enter para continuar.')
        else:
            break
        
    print('--------------------------------------------')
    album = Album(name, ano)
    estanteAux = Pilha()
    while estante.top() != None:
        if ano > estante.top().ano :
            estanteAux.push(estante.pop())
        else:
            break
    estante.push(album)
    while estanteAux.top() != None:
        estante.push(estanteAux.pop())
    print(estante.top())
    print('--------------------------------------------')
    print("Album adicionado com sucesso.")
    input('Precione Enter para continuar.')
    print('--------------------------------------------')
    menu_inserir()

def ver_estante():
    estanteAux = Pilha()
    while estante.top() != None:
        disco = estante.pop()
        estanteAux.push(disco)
        print(disco)
    return
    
def menu_principal():
    print('--------MENU PRINCIPAL--------')
    print('1 - Inserir Album')
    print('--------------------------------------------')
    print('2 - Ver Estante')
    print('--------------------------------------------')
    print('0 - Sair')
    print('--------------------------------------------')

def iniciarEstante():
    menu_principal()
    op = input('DIGITE A OPÇÃO //> ')
    print('--------------------------------------------')
    if op == '0':
        print('Saindo do Menu')
        return
    if op == '1':
        inserirVinil()
    elif op == '2':
        ver_estante()
    else:
        print('--------------------------------------------')
        input('Essa opção não existe, tente novamente.')

def menu_inserir():
    print('[1] Adicionar Album - ')
    print('[0] Voltar - ')
    print('--------------------------------------------')
    op = input('Digite a opção - ')
    if op == '1':
        inserirVinil()
    if op == '0':
        iniciarEstante()
    else:
        ('Opcao nao existente, tente novamente')
        return

iniciarEstante()