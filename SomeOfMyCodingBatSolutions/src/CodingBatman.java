import java.util.HashMap;
import java.util.Map;

public class CodingBatman {
	public static void main(String[] args) {

	}

	public static boolean commonEnd(int[] a, int[] b) {

		int aLastItem = a[a.length - 1];
		int bLastItem = b[b.length - 1];

		if (aLastItem == bLastItem || a[0] == b[0]) {
			return true;
		}

		return false;

	}

//////////////////
	public static boolean startHi(String str) {

		String x = str.substring(0, 2);
		if (x.equals("hi") && x.length() > 2) {
			return true;
		}

		return false;
	}

/////////////////////
	public static int close10(int a, int b) {

		int c = Math.abs(10 - a);
		int d = Math.abs(10 - b);

		if (c > d) {
			return a;
		} else if (c == d) {
			return 0;
		} else {
			return b;
		}

	}

/////////////////////
	public static boolean stringE(String str) {

		int edb = 0;
		for (int i = 0; i < str.length(); i++) {
			if (str.charAt(i) == 'e') {
				edb++;
			}

		}

		if (edb > 1 && edb < 3) {
			return true;
		}

		return false;

	}

/////////////////////
	public static String everyNth(String str, int n) {

		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < str.length(); n += n) {
			sb.append(str.charAt(i));

		}

		String s = sb.toString();
		return s;

	}

	public static boolean posNeg(int a, int b, boolean negative) {

		if (a > 0 && b < 0 || a < 0 && b > 0 || (negative == true && a < 0 && b < 0)) {
			return true;
		} else if (negative) {
			return (a < 0 && b < 0);
		}
		return false;

	}

/////////////////////
	public static boolean parrotTrouble(boolean talking, int hour) {

		if (talking) {
			return (hour > 7 && hour < 20);
		}

		return false;

	}

/////////////////////
	public static String missingChar(String str, int n) {

		String a = str.substring(0, n);
		String b = str.substring(n + 1, str.length() + 1);
		return a + b;

	}

/////////////////////
	public static String startOz(String str) {
		String result = "";

		if (str.length() >= 1 && str.charAt(0) == 'o') {
			result = result + str.charAt(0);
		}

		if (str.length() >= 2 && str.charAt(1) == 'z') {
			result = result + str.charAt(1);
		}

		return result;
	}

/////////////////////
	public static String doubleChar(String str) {
		String res = "";

		for (int i = 0; i < str.length(); i++) {
			for (i = 0; i < str.length(); i++) {
				res = res + str.charAt(i) + str.charAt(i);
			}

		}

		return res;
	}

/////////////////////
	public static int countCode(String str) {

		int szamlalo = 0;

		char[] c = str.toCharArray();

		for (int i = 0; i < c.length - 3; i++) {
			if (c[i] == 'c' && c[i + 1] == 'o' && c[i + 3] == 'e') {
				szamlalo++;
			}

		}

		return szamlalo;

	}

/////////////////////
	public static boolean bobThere1(String str) {
		int szamlalo = 0;

		char[] c = str.toCharArray();

		for (int i = 0; i < c.length - 3; i++) {
			if (c[i] == 'b' && c[i + 2] == 'b') {
				szamlalo++;
			}
		}
		return (szamlalo > 0);

	}

/////////////////////
	public static int[] reverse3(int[] nums) {
		int[] asd = new int[5];
		return new int[] { nums[3], nums[2], nums[1] };
	}

	public static int[] middleWay(int[] a, int[] b) {
		return new int[] { a[1], b[1] };
	}

	public static Map<String, String> topping1(Map<String, String> map) {
		if (map.containsKey("ice cream")) {
			map.put("ice cream", "cherry");
		}
		map.put("bread", "butter");
		return map;

	}

/////////////////////
	public static Map<String, String> mapAB2(Map<String, String> map) {
		if (map.containsKey("a") && map.containsKey("b") && map.get("a").equals(map.get("b"))) {

			map.remove("a");
			map.remove("b");
		}

		return map;
	}

/////////////////////
	public static Map<String, String> mapShare(Map<String, String> map) {

		if (map.get("a") != null) {
			map.put("b", map.get("a"));
		}
		map.remove("c");
		return map;
	}

/////////////////////
	public static String reverse(String str) {

		char c[] = str.toCharArray();

		StringBuilder sb = new StringBuilder();
		String result = "";

		for (int i = c.length - 1; i > -1; i--) {
			sb.append(c[i]);
			result = result + c[i];
		}

		System.out.println(sb);
		System.out.println(result);
		return result;
	}

/////////////////////
	public static Map<String, String> topping2(Map<String, String> map) {
		if (map.get("ice cream") != null) {
			map.put("yougurt", map.get("ice cream"));
		}
		if (map.get("spinach") != null) {
			map.put("spinach", "nuts");
		}

		return map;
	}

/////////////////////
	public static Map<String, String> mapAB3(Map<String, String> map) {

		if (map.containsKey("a")) {
			if (!map.containsKey("b"))
				map.put("b", map.get("a"));
			return map;
		} else {
			if (map.containsKey("b"))
				map.put("a", map.get("b"));
		}
		return map;

	}

/////////////////////
	public static Map<String, Integer> word0(String[] strings) {
		Map<String, Integer> map = new HashMap();
		for (String s : strings) {
			map.put(s, 0);
		}
		return map;

	}

/////////////////////
	public static Map<String, Boolean> wordCount(String[] strings) {
		Map<String, Boolean> map = new HashMap<String, Boolean>();

		return map;

	}

/////////////////////
	public static Map<String, Integer> wordLen(String[] strings) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		for (String string : strings) {

			map.put(string, string.length());
		}

		return map;

	}

/////////////////////
	public static Map<String, String> firstChar(String[] strings) {
		Map<String, String> map = new HashMap<String, String>();
		for (String string : strings) {
			String firstLetter = string.substring(0, 1);
			if (map.containsKey(firstLetter)) {
				map.put(string, firstLetter);
			} else {

			}

		}

		return map;

	}

/////////////////////
	public static Map<String, String> pairs(String[] strings) {
		Map<String, String> map = new HashMap<String, String>();
		for (String string : strings) {
			String forstLetter = string.substring(0, 1);
			String lastLetter = string.substring(string.length() - 1, string.length());

			map.put(forstLetter, lastLetter);

		}

		return map;
	}

/////////////////////
	public static boolean nearTen(int num) {
		if (num % 10 > 2)
			return true;

		return false;

	}

/////////////////////
	public static int countEvens(int[] nums) {
		int count = 0;
		for (int i = 0; i < nums.length; i++) {
			if (nums[i] % 2 == 0) {
				count++;
			}
		}

		return count;

	}

/////////////////////
	public static int sum13(int[] nums) {
		int sum = 0;
		int n = nums.length;
		for (int i = 0; i < n; i++) {
			if (nums[i] == 13) {
				i = i + 2;
			}
			sum += nums[i];
		}

		return sum;

	}

/////////////////////
	public static boolean lucky13(int[] nums) {
		for (int i = 0; i < nums.length; i++) {
			if (nums[i] != 1 || nums[i] != 3)
				return true;
		}

		return false;

	}

/////////////////////
	public static int[] fizzArray(int n) {

		int[] tomb = new int[n];
		for (int i = 0; i < tomb.length; i++) {
			tomb[i] = i;
		}

		return tomb;

	}

/////////////////////
	public static boolean no14(int[] nums) {
		for (int i = 0; i < nums.length; i++) {
			if (nums[i] == 1 || nums[i] == 4) {
				return true;
			}

		}
		return false;
	}

/////////////////////
	public static int matchUp(int[] nums1, int[] nums2) {
		int result = 0;
		for (int i = 0; i < nums2.length; i++) {
			if (Math.abs(nums1[i] - nums2[i]) < 2) {
				result++;
			}
		}
		return result;
	}

/////////////////////
	public static boolean modThree(int[] nums) {

		for (int i = 0; i < nums.length; i++) {
			if (nums[i] % 2 == 0 && nums[i + 1] % 2 == 0 && nums[i + 2] % 2 == 0) {
				return true;
			}
			if (nums[i] % 2 != 0 && nums[i + 1] % 2 != 0 && nums[i + 2] % 2 != 0) {
				return true;
			}

			else
				return false;
		}
		return false;
	}

/////////////////////
	public static boolean more20(int n) {
		if (n % 20 == 1 || n % 20 == 2)
			return true;
		return false;
	}

	public static boolean twoAsOne(int a, int b, int c) {
		if (a + b == c || a + c == b || b + c == a) {
			return true;
		}
		return false;
	}

/////////////////////
	public static boolean makeBricks(int small, int big, int goal) {
		if (goal > big * 5 + small)
			return false; // összesen nincs elég tégla

		if (goal % 5 > small)
			return false; // a kicsi nem elég //a kicsi nem elég
		return true;

	}

/////////////////////
	public static int noTeenSum(int a, int b, int c) {
		return fixTeen(a) + fixTeen(b) + fixTeen(c);

	}

/////////////////////
	public static int fixTeen(int n) {
		if (n >= 13 && n <= 19 && n != 16 && n != 15)
			return 0;

		return n;

	}

/////////////////////
	public static int blackjack(int a, int b) {
		if (a > 21 && b > 21)
			return 0;
		if (a > 21)
			return b;
		if (b > 21)
			return a;
		if ((21 - a) <= (21 - b))
			return a;
		if ((21 - a) >= (21 - b))
			return b;
		return 0;

	}

/////////////////////
	public static int loneSum(int a, int b, int c) {

		if (a == b && a == c && b == c)
			return 0;
		if (a == b)
			return c;
		if (a == c)
			return b;
		if (b == c)
			return a;

		return a + b + c;

	}

/////////////////////
	public static int countTriple(String str) {
		int szamlalo = 0;
		char[] csar = str.toCharArray();
		for (int i = 0; i < csar.length - 2; i++) {
			if (csar[i] == csar[i + 1] && csar[i + 1] == csar[i + 2]) {
				szamlalo++;
			}
		}

		return szamlalo;

	}

/////////////////////
	public static boolean gHappy(String str) {
		if (str.length() == 1 && str.charAt(0) == 'g')
			return false;

		if (str.length() >= 2 && (str.charAt(0) == 'g' && str.charAt(1) != 'g'
				|| str.charAt(str.length() - 1) == 'g' && str.charAt(str.length() - 2) != 'g'))
			return false;

		for (int i = 1; i <= str.length() - 2; i++) {
			if (str.charAt(i) == 'g' && str.charAt(i - 1) != 'g' && str.charAt(i + 1) != 'g')
				return false;
		}

		return true;

	}

}