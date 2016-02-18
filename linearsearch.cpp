int linearSearch(int a[], int n, int target)
{
	int i;
	for(i = 0; i < n; i++)
		if(a[i] == target) //key comparison
			return i;
	return -1; //use -1 to indicate failure		
}
