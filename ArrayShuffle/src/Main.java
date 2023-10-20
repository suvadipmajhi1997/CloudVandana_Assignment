import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int size = scn.nextInt();
        int arr[] = new int[size];
        for (int idx = 0; idx < size; idx++) {
            arr[idx] = scn.nextInt();
        }
        Shuffle(arr,size);
    }

    static void Shuffle(int arr[], int size){
        Random num = new Random();

        for(int idx=0;idx<size;idx++){
            int j = num.nextInt(idx+1);
            int temp = arr[idx];
            arr[idx] = arr[j];
            arr[j] = temp;
        }

        System.out.print(Arrays.toString(arr));

//        for(int res : arr) {
//            System.out.print(res+" ");
//        }

    }
}