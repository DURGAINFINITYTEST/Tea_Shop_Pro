import java.util.Scanner;

public class MyClass {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the id number :");
		int number = sc.nextInt();

		int reverse = 0;
		while (number != 0) {
			reverse = reverse * 10 + number % 10;
			number = number / 10;

		}

		System.out.println(reverse);

	}

}
