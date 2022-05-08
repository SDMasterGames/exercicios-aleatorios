class No:
    def __init__(self, valor):
        self.valor = valor
        self.ant = None


class Album:
    def __init__(self, nome, ano):
        self.nome = nome
        self.ano = ano


class Pilha:
    def __init__(self):
        self.topo = None
        self.size = 0

    def push(self, i):
        no = No(i)
        if(self.topo == None):
            self.topo = no
        else:
            atual = self.topo
            anterior = atual.ant
            if(anterior == None):
                if(atual.valor.ano > no.valor.ano):
                    no.ant = atual
                    self.topo = no
                else:
                    atual.ant = no
                    self.topo = atual
            else:
                for i in range(self.size-1):
                    if(atual.valor.ano < no.valor.ano and anterior.valor.ano > no.valor.ano):
                        anterior.ant = None
                        no.ant = anterior
                        atual.ant = no
                        anterior = None
                    else:
                        atual = anterior
                        anterior = anterior.ant
                else:
                    atual.ant = no
        self.size = self.size + 1

    def pop(self):
        if self.topo != None:
            i = self.topo.valor
            self.topo = self.topo.ant
            return str(i.nome) + " ("+str(i.ano)+")"

    def top(self):
        result = str(self.topo.valor.nome) + "("+str(self.topo.valor.ano)+")"
        return result

    def dale(self):
        result = "\n\t"
        ponteiro = self.topo
        while(ponteiro):
            result = result+str(ponteiro.valor.nome) + \
                " ("+str(ponteiro.valor.ano)+")\n\t"
            ponteiro = ponteiro.ant
        return result
