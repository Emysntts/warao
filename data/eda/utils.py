import collections
from collections import Counter
import re


def analyze_dictionary(name, dictionary):
    print(f"\n--- EDA for: {name} ---")
    if not isinstance(dictionary, dict):
        print(f"'{name}' is not a dictionary or is None. Skipping.")
        return

    num_entries = len(dictionary)
    print(f"Number of entries: {num_entries}")

    if num_entries == 0:
        print("Dictionary is empty.")
        print("-" * 40)
        return

    print("\nSample entries (first 3):")
    for i, (key, value) in enumerate(dictionary.items()):
        print(f"  {repr(key)}: {repr(value)}") # Use repr to see quotes for strings
        if i >= 2:
            break

    first_key = next(iter(dictionary.keys()))
    first_value = dictionary[first_key]
    print(f"\nType of a sample key: {type(first_key)}")
    print(f"Type of a sample value: {type(first_value)}")

    # Content Analysis (if keys/values are strings)
    key_lengths = []
    value_lengths = []
    empty_value_keys = []
    empty_key_values = [] 

    all_keys_are_strings = True
    all_values_are_strings = True

    for k, v in dictionary.items():
        if isinstance(k, str):
            key_lengths.append(len(k))
            if not k.strip(): # Check for empty or whitespace-only strings
                empty_key_values.append(v)
        else:
            all_keys_are_strings = False

        if isinstance(v, str):
            value_lengths.append(len(v))
            if not v.strip(): # Check for empty or whitespace-only strings
                empty_value_keys.append(k)
        else:
            all_values_are_strings = False

    if key_lengths:
        print("\nKey String Analysis:")
        if not all_keys_are_strings:
            print(f"  Note: Not all keys are strings. Analysis for {len(key_lengths)} string keys out of {num_entries} total entries.")
        print(f"  Average key length: {sum(key_lengths) / len(key_lengths):.2f}")
        print(f"  Min key length: {min(key_lengths)}")
        print(f"  Max key length: {max(key_lengths)}")
        if empty_key_values:
            print(f"  Number of empty/whitespace-only keys: {len(empty_key_values)}")
    
    if value_lengths:
        print("\nValue String Analysis:")
        if not all_values_are_strings:
            print(f"  Note: Not all values are strings. Analysis for {len(value_lengths)} string values out of {num_entries} total entries.")
        print(f"  Average value length: {sum(value_lengths) / len(value_lengths):.2f}")
        print(f"  Min value length: {min(value_lengths)}")
        print(f"  Max value length: {max(value_lengths)}")
        if empty_value_keys:
            print(f"  Number of empty/whitespace-only values: {len(empty_value_keys)}")
            if empty_value_keys:
                 print(f"    Keys with empty values (first 3): {empty_value_keys[:3]}")
    
    # Check for '/' in Warao translations (values) as an example of specific pattern
    if value_lengths: # Only if there are string values
        entries_with_slash_in_value = {k: v for k, v in dictionary.items() if isinstance(v, str) and "/" in v}
        if entries_with_slash_in_value:
            print(f"\nFound {len(entries_with_slash_in_value)} entries with '/' in their string value (potential multiple translations/notes):")
            for i, (k, v) in enumerate(entries_with_slash_in_value.items()):
                if i < 3:
                    print(f"  {repr(k)}: {repr(v)}")
                elif i == 3:
                    print("  ...")
                    break
    print("-" * 40)
    
def unify_translations(modules_to_inspect):
    """
    Collect all string values from every dict in each module.
    Returns a list of all Warao‐translation strings.
    """
    all_vals = []
    for mod in modules_to_inspect.values():
        for attr in dir(mod):
            if not attr.startswith("__"):
                obj = getattr(mod, attr)
                if isinstance(obj, dict):
                    all_vals.extend(v for v in obj.values() if isinstance(v, str))
    return all_vals

def tokenize_syllables(word):
    """
    Very simple syllable regex: (optional consonant cluster)+(vowel+).
    Adjust the vowel class to match Warao orthography.
    """
    pattern = re.compile(r'[^aeiouâêîôû]+?[aeiouâêîôû]+', re.IGNORECASE)
    return pattern.findall(word)

def count_syllables(texts):
    """
    Given a list of strings, split into words, extract syllables,
    and return a Counter mapping syllable->frequency.
    """
    ctr = Counter()
    for txt in texts:
        for w in txt.split():
            for syl in tokenize_syllables(w):
                ctr[syl.lower()] += 1
    return ctr