#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef long double ld;

bool isLetter(char c)
{
    if((c>='A' && c<='Z') || (c>='a' && c<='z')) return true;
    else return false;
}
bool isPalindrom(string taskDescription)
{

   
   int i=0;
   int j=taskDescription.size()-1;
   while(i<j){
    if(!isLetter(taskDescription[i])) i++;
    else if(!isLetter(taskDescription[j])) j--;
    else if(tolower(taskDescription[i])==tolower(taskDescription[j])) {
        i++;
        j--;
    }
    else return false;
   }
   return true;



  

}


int main()
{
    
   string taskDescription ;
   cin>>taskDescription;
   cout<<isPalindrom(taskDescription);







    return 0;
}

