import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String str = scn.nextLine();
        System.out.print(checkIfPangram(str));

    }
    public static boolean checkIfPangram(String str) {
        int freq[]=new int[26];
        for(int i=0;i<str.length();i++){
            if(Character.isLetter(str.charAt(i)))
                freq[str.charAt(i)-'a']++;
        }

        for(int i=0;i<26;i++){
            if(freq[i]==0)return false;
        }
        return true;
    }
}