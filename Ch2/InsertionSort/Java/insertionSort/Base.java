package insertionSort;

import java.util.Arrays;

public class Base {

	public static void main (String args[]){

		int[] input1 = { 1,2,3,4,5};
		int[] input2 = { 1,2,3,5,4};
		int[] input3 = { 5,4,3,3,2,1};

		System.out.println(Arrays.toString(insertionSort(input1)));
		System.out.println(Arrays.toString(insertionSort(input2)));
		System.out.println(Arrays.toString(insertionSort(input3)));
	}

	private static int[] insertionSort(int[] input) {
		int key, i;
		for (int j = 1; j<input.length;j++){
			key = input[j];
			i = j - 1;
			while ( i>=0 && input[i] > key){
				input[i+1] = input[i];
				i = i-1;
			}
			input[i+1] =key;
		}
		return input;
	}

}
