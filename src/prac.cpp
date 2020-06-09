#include <bits/stdc++.h>
using namespace std;


long minoperation ( vector<long> a, vector<long> b, vector<long>c)
{
    if(c[0]==0 && c[1]==0 && c[2]==0)
        return 0 ;
    
    long d = INT_MAX;
    for(int i =0 ;i<3 ;i++)
    {
        if(c[i]!=0)
            d = min(d,c[i]);
    }
    long ans1=INT_MAX,ans2 = INT_MAX;
    vector<long> c1(c),c2(c);
    if(d!=INT_MAX)
    {
        for(int i = 0 ;i<3 ;i++)
        {
            if(c[i]-d>0)
            {
                c1[i]-=d;
            }
            ans1 = minoperation(a,b,c1);
        }

    }

    int count = 0 ;

    for(int i= 0 ;i<3;i++)
    {
        if(c[i]<=a[i])
        {
            count++;
            c2[i]-=a[i];
        }
    }

    if(count>0)
        ans2=minoperation(a,b,c2);
    
    return min(ans1,ans2);
}
int main() {
    int t;

    cin>>t ;
    while(t--)
    {
        vector<long> a[3],b[3];
        for(int i = 0 ;i<3;i++)
        {
            cin >>a[i];
        }
        for(int i = 0 ;i<3;i++)
        {
            cin >> b[i];
            c[i]=b[i]-a[i];
        }

        cout << minoperation(a,b,c);
    }
}
