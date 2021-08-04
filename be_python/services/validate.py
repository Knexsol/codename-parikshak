

def all_keys_present(data_dict, required_keys):
    available_keys = data_dict.keys()
    for key in required_keys:
        if key not in available_keys:
            return False
    return True

