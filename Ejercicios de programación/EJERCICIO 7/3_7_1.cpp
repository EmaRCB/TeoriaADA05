#include <iostream>
#include <stack>
using namespace std;

void leer(int a[], int longitud);
void insertInStack(int a[], int longitud);
void insertInHeap(int a[], int longitud);

int main() {
    
    int TAMANIO = 5;
    int b[TAMANIO];
	 //leer(b, TAMANIO);
	 
	 int a[TAMANIO] = { 3,4,5,6,7 }; //solo de prueba, borrar luego
	 insertInStack(a, TAMANIO); 
	 //insertInHeap(a, TAMANIO);

    return 0;
}

/* void leer(int a[], int longitud){

	int i;
	printf("Ingresa los elementos del vector");
	for(i=0; i < longitud; i++){
    	scanf("%d", a[i]);
	} 
}*/

void insertInStack(int a[], int longitud){
		stack<int> stack;
		int i;/*Imprime el arreglo original*/  
		printf("STACK: ");
		for(i=0; i < longitud; i++){
			//printf ("%3d", b[i]);
			stack.push(a[i]);
			printf("%d ", stack.top()); //para probar que si estamos metiendo en la pila
		}/*fin de for*/    
	}
