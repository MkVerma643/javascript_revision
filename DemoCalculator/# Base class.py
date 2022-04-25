# Base class
class Grandparent:

def init(self, grandfathername, grandmothername): 
    self.grandfathername = grandfathername
    self.grandmothername = grandmothername

#Intermediate class.
class Parent (Grandparent):

def init_(self, fathername, mothername):
    self.fathername = fathername
    self.mothername = mothername

#invoking constructor of Grandparent class
Grandparent_init_(self, grandfathername, grandmothername)

#Derived class
class Son (Parent): def _init_(self, sonname, fathername, mothername, grandfathername, grandmothername): self.sonname sonname

#invoking constructor of Parent class
Parent_init_(self, fathername, mothername, grandfathername, grandmothername)

def print_name(self):

print("Grandfather name :", self.grandfathername)
print("Grandmother name:", self.grandmothername) print("Father name :", self.fathername)
print("Mother name :", self.mothername) print("Son name", self.sonname)

# Driver code
s1 - Son ("SATISH YADAV", "GAYASHANKAR YADAV", "SANTARA YADAV", "AMBIKA PRASAD YADAV", "RENUKA YADAV")
print (s1.sonname) s1.print_name()